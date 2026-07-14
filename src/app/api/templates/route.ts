import { FEATURED_TEMPLATES } from "@/data/templates";

export async function GET() {
  return Response.json({ success: true, data: FEATURED_TEMPLATES });
}
