import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'document.pdf');
    const pdf = await readFile(filePath);

    return new Response(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"',
        'Content-Length': String(pdf.length),
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return new Response('PDF not found', { status: 404 });
  }
}
