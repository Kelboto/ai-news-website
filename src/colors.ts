export const colorBaseClasses: Record<string, string> = {
  slate: "prose-slate",
  stone: "prose-stone",
  gray: "prose-gray",
  neutral: "prose-neutral",
  zinc: "prose-zinc",
};

export const colorAccentClasses: Record<string, string> = {
  red: "prose-red",
  orange: "prose-orange",
  amber: "prose-amber",
  yellow: "prose-yellow",
  lime: "prose-lime",
  green: "prose-green",
  emerald: "prose-emerald",
  teal: "prose-teal",
  cyan: "prose-cyan",
  sky: "prose-sky",
  blue: "prose-blue",
  indigo: "prose-indigo",
  violet: "prose-violet",
  purple: "prose-purple",
  fuchsia: "prose-fuchsia",
  pink: "prose-pink",
  rose: "prose-rose",
  burnt: "prose-orange", // alias for burnt orange
};

export type AccentColor =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "burnt";

export type BaseColor = "slate" | "stone" | "gray" | "neutral" | "zinc";

// Burnt orange palette (custom)
// Primary: #CC5500 (classic burnt orange)
// Dark:    #8B4000 (deep burnt, for hover/dark mode)
// Light:   #E8843D (lighter burnt, for backgrounds)
export const BURNT_ORANGE = {
  50: "#FDF4ED",
  100: "#FAE5D2",
  200: "#F5CAA5",
  300: "#EDA873",
  400: "#E8843D",
  500: "#D2691E",
  600: "#CC5500", // primary
  700: "#A64400",
  800: "#8B4000", // dark / hover
  900: "#6B2F00",
  950: "#3F1B00",
};