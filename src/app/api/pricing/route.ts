import { PRICING_PLANS } from "@/data/pricing";

export async function GET() {
  return Response.json({ success: true, data: PRICING_PLANS });
}
