import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  // revalidateTag('notes');
  revalidatePath('notes');
  revalidatePath(`/notes/[slug]`, 'page');

  return NextResponse.json({});
};
