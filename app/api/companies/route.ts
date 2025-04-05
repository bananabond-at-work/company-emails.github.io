import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const EMAIL_FORMATS_DIR = path.join(process.cwd(), 'app/emailFormats');

// Ensure the email formats directory exists
async function ensureDirectory() {
  try {
    await fs.access(EMAIL_FORMATS_DIR);
  } catch {
    await fs.mkdir(EMAIL_FORMATS_DIR, { recursive: true });
  }
}

export async function GET() {
  try {
    await ensureDirectory();
    const files = await fs.readdir(EMAIL_FORMATS_DIR);
    const companies = files.map(file => path.basename(file, '.txt'));
    return NextResponse.json({ companies });
  } catch (error) {
    console.error('Error reading companies:', error);
    return NextResponse.json({ error: 'Failed to read companies' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { company, format } = await request.json();
    
    if (!company || !format) {
      return NextResponse.json(
        { error: 'Company name and format are required' },
        { status: 400 }
      );
    }

    await ensureDirectory();
    const filePath = path.join(EMAIL_FORMATS_DIR, `${company}.txt`);
    await fs.writeFile(filePath, format, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving company format:', error);
    return NextResponse.json(
      { error: 'Failed to save company format' },
      { status: 500 }
    );
  }
} 