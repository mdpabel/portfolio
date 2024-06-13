import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  const secrete = request.nextUrl.searchParams.get('secrete');

  if (secrete != '123') {
    return Response.json({ revalidated: false, secrete: secrete ?? null });
  }

  if (path) {
    revalidatePath(path);
    revalidateTag(path);
    return Response.json({ revalidated: true, now: Date.now(), path: path });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  });
}
