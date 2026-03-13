import {
  AlertTriangle,
  Building,
  Clock,
  Diamond,
  DollarSign,
  Droplets,
  Flame,
  Globe,
  Hammer,
  Home,
  Layers,
  PanelTop,
  Shield,
  Square,
  Star,
  Triangle,
  type LucideIcon,
} from "lucide-react";

export const serviceIconMap: Record<string, LucideIcon> = {
  layers: Layers,
  home: Home,
  square: Square,
  diamond: Diamond,
  flame: Flame,
  "panel-top": PanelTop,
  hammer: Hammer,
  building: Building,
  triangle: Triangle,
  droplets: Droplets,
  "alert-triangle": AlertTriangle,
};

export const featureIconMap: Record<string, LucideIcon> = {
  shield: Shield,
  star: Star,
  clock: Clock,
  "dollar-sign": DollarSign,
  globe: Globe,
};
