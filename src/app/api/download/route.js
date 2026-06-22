import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'CVJoseIbarguenv2.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    // Force download with specific filename
    headers.set('Content-Disposition', 'attachment; filename="CV_Jose_David_Ibarguen.pdf"');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error('Error downloading CV:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
