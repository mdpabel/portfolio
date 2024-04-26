import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  console.log(req);
  await revalidateTag('notes');
  await revalidatePath('/notes');
  return NextResponse.json({});
};
