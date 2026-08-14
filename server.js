// Production entry point for Hostinger Node.js Application Manager / VPS / PM2
const path = require('path');
const fs = require('fs');

const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOSTNAME || '0.0.0.0';

// Check if Next.js standalone server is available
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServerPath)) {
  process.env.PORT = String(port);
  process.env.HOSTNAME = hostname;
  console.log(`[Hostinger Server] Starting standalone server on http://${hostname}:${port}`);
  require(standaloneServerPath);
} else {
  // Fallback to standard next start
  const { createServer } = require('http');
  const next = require('next');

  const app = next({ dev: false, hostname, port });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        await handle(req, res);
      } catch (err) {
        console.error('Error handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  });
}
