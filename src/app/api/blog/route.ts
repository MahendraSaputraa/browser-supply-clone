import { NextResponse } from "next/server";

import { BLOG_POSTS } from "@/data/blog";

export async function GET() {
  return NextResponse.json({ success: true, data: BLOG_POSTS });
}
