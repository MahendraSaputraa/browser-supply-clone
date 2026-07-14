import {
  CreditCardIcon,
  FramerIcon,
  GlobeIcon,
  InfinityIcon,
  MailIcon,
  RefreshIcon,
  VideoIcon,
} from "@/assets/icons";
import type { PricingIconKey } from "@/types/pricing";

export const PRICING_ICON_MAP: Record<PricingIconKey, React.ComponentType> = {
  creditCard: CreditCardIcon,
  refresh: RefreshIcon,
  framer: FramerIcon,
  video: VideoIcon,
  globe: GlobeIcon,
  infinity: InfinityIcon,
  mail: MailIcon,
};
