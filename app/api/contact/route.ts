import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // In a real app, send email or store to DB here
  console.log('Contact form submission:', data);
  return NextResponse.json({ ok: true });
}
