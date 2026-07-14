import { TESTIMONIAL_ROWS } from "@/data/testimonials";

export async function GET() {
  return Response.json({ success: true, data: TESTIMONIAL_ROWS });
}
