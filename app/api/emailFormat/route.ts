import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const EMAIL_FORMATS_DIR = path.join(process.cwd(), 'app/emailFormats');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const company = searchParams.get('company');

    if (!company) {
      return NextResponse.json(
        { error: 'Company parameter is required' },
        { status: 400 }
      );
    }

    const filePath = path.join(EMAIL_FORMATS_DIR, `${company}.txt`);
    const format = await fs.readFile(filePath, 'utf-8');
    
    return NextResponse.json({ format });
  } catch (error) {
    console.error('Error reading email format:', error);
    return NextResponse.json(
      { error: 'Failed to read email format' },
      { status: 500 }
    );
  }
} 