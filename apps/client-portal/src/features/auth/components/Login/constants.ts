import { Users, ShieldCheck, Cpu, BarChart3 } from "lucide-react";
import type { FeatureCapability } from "./types";

export const DEFAULT_BACKGROUND_SRC = "/Background.svg";
export const DEFAULT_GLOBE_SRC = "/Globe_Holographic.png";

export const LOGIN_CAPABILITIES: readonly FeatureCapability[] = [
  {
    id: "clients",
    icon: Users,
    translationKey: "capabilities.clients",
  },
  {
    id: "monitoring",
    icon: ShieldCheck,
    translationKey: "capabilities.monitoring",
  },
  {
    id: "ai",
    icon: Cpu,
    translationKey: "capabilities.ai",
  },
  {
    id: "reports",
    icon: BarChart3,
    translationKey: "capabilities.reports",
  },
] as const;
