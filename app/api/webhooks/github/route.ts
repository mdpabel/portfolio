import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  // revalidateTag('notes');
   revalidatePath(path);
  revalidatePath(`/${path}/[slug]`, 'page');
  
  return NextResponse.json({});
};
