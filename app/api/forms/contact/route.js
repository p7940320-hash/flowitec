import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, interest, message } = body;

    // For MVP, just log the form submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      country,
      interest,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate successful submission
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      error: 'Failed to send message. Please try again.' 
    }, { status: 500 });
  }
}