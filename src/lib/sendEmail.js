import tls from 'tls';
import net from 'net';

/**
 * Pure Node.js SMTP Client without external dependencies.
 * Fully compatible with Hostinger SMTP (smtp.hostinger.com:465),
 * Gmail SMTP (smtp.gmail.com:465), or any standard SSL/TLS SMTP server.
 */
export async function sendSmtpEmail({
  host = process.env.HOSTINGER_SMTP_HOST || process.env.SMTP_HOST || 'smtp.hostinger.com',
  port = parseInt(process.env.HOSTINGER_SMTP_PORT || process.env.SMTP_PORT || '465', 10),
  user = process.env.HOSTINGER_SMTP_USER || process.env.SMTP_USER,
  pass = process.env.HOSTINGER_SMTP_PASS || process.env.SMTP_PASS,
  from = process.env.HOSTINGER_EMAIL_FROM || process.env.EMAIL_FROM || user || 'leads@magnatecapital.com',
  to = 'kumar8271@gmail.com',
  replyTo = '',
  subject = '',
  html = '',
  text = ''
}) {
  if (!user || !pass) {
    console.warn('[Hostinger SMTP] Missing SMTP_USER or SMTP_PASS environment variables.');
    return { success: false, error: 'SMTP credentials not configured in environment variables' };
  }

  return new Promise((resolve, reject) => {
    let socket;
    let step = 0;
    let buffer = '';

    const timeout = setTimeout(() => {
      if (socket) socket.destroy();
      reject(new Error('SMTP Connection timeout after 15 seconds.'));
    }, 15000);

    const cleanup = () => {
      clearTimeout(timeout);
      if (socket) socket.end();
    };

    // Connect via TLS for port 465 (Hostinger default SSL)
    if (port === 465) {
      socket = tls.connect(port, host, { rejectUnauthorized: false }, onConnected);
    } else {
      socket = net.connect(port, host, onConnected);
    }

    socket.setEncoding('utf-8');

    function onConnected() {
      console.log(`[Hostinger SMTP] Connected to ${host}:${port}`);
    }

    function sendCommand(cmd) {
      socket.write(cmd + '\r\n');
    }

    socket.on('data', (data) => {
      buffer += data;
      const lines = buffer.split('\r\n');
      buffer = lines.pop(); // Keep incomplete line in buffer

      for (const line of lines) {
        if (!line) continue;
        console.log('[SMTP IN]', line);
        const code = parseInt(line.substring(0, 3), 10);
        const isMultiLine = line.charAt(3) === '-';

        if (isMultiLine) continue; // Wait for final line of multiline response

        if (code >= 400) {
          cleanup();
          return reject(new Error(`SMTP Error ${code}: ${line}`));
        }

        switch (step) {
          case 0: // Server greeting (220)
            if (code === 220) {
              step++;
              sendCommand(`EHLO hostinger.local`);
            }
            break;

          case 1: // EHLO response (250)
            if (code === 250) {
              step++;
              sendCommand(`AUTH LOGIN`);
            }
            break;

          case 2: // AUTH LOGIN response (334 Username challenge)
            if (code === 334) {
              step++;
              sendCommand(Buffer.from(user).toString('base64'));
            }
            break;

          case 3: // Username sent, waiting for password challenge (334)
            if (code === 334) {
              step++;
              sendCommand(Buffer.from(pass).toString('base64'));
            }
            break;

          case 4: // Auth Success (235)
            if (code === 235) {
              step++;
              // Extract raw email from format like "Name <email@domain.com>"
              const fromMatch = from.match(/<([^>]+)>/);
              const fromEmail = fromMatch ? fromMatch[1] : from;
              sendCommand(`MAIL FROM:<${fromEmail}>`);
            }
            break;

          case 5: // MAIL FROM response (250)
            if (code === 250) {
              step++;
              sendCommand(`RCPT TO:<${to}>`);
            }
            break;

          case 6: // RCPT TO response (250)
            if (code === 250) {
              step++;
              sendCommand(`DATA`);
            }
            break;

          case 7: // DATA response (354 start mail input)
            if (code === 354) {
              step++;
              const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substring(2)}`;
              
              let rawEmail = '';
              rawEmail += `From: ${from}\r\n`;
              rawEmail += `To: ${to}\r\n`;
              if (replyTo) {
                rawEmail += `Reply-To: ${replyTo}\r\n`;
              }
              rawEmail += `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=\r\n`;
              rawEmail += `MIME-Version: 1.0\r\n`;
              rawEmail += `Content-Type: multipart/alternative; boundary="${boundary}"\r\n`;
              rawEmail += `Date: ${new Date().toUTCString()}\r\n`;
              rawEmail += `\r\n`;

              // Plain text part
              if (text) {
                rawEmail += `--${boundary}\r\n`;
                rawEmail += `Content-Type: text/plain; charset=UTF-8\r\n`;
                rawEmail += `Content-Transfer-Encoding: base64\r\n\r\n`;
                rawEmail += Buffer.from(text).toString('base64') + `\r\n\r\n`;
              }

              // HTML part
              if (html) {
                rawEmail += `--${boundary}\r\n`;
                rawEmail += `Content-Type: text/html; charset=UTF-8\r\n`;
                rawEmail += `Content-Transfer-Encoding: base64\r\n\r\n`;
                rawEmail += Buffer.from(html).toString('base64') + `\r\n\r\n`;
              }

              rawEmail += `--${boundary}--\r\n`;
              rawEmail += `.\r\n`;

              socket.write(rawEmail);
            }
            break;

          case 8: // Mail queued / OK (250)
            if (code === 250) {
              step++;
              sendCommand(`QUIT`);
              cleanup();
              resolve({ success: true, message: 'Email sent via Hostinger SMTP.' });
            }
            break;
        }
      }
    });

    socket.on('error', (err) => {
      cleanup();
      console.error('[Hostinger SMTP Socket Error]', err);
      reject(err);
    });

    socket.on('close', () => {
      clearTimeout(timeout);
    });
  });
}
