import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, account, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and Email are required.' },
        { status: 400 }
      );
    }

    console.log(`[Contact Submission (Next.js)] Name: ${name}, Email: ${email}, Phone: ${phone || 'N/A'}, Account: ${account || 'N/A'}, Message: ${message || 'N/A'}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your request has been received. Our account manager will contact you shortly.'
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
