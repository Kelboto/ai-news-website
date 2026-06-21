import prose from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import { ACCENT_COLOR, BASE_COLOR, MANUAL_DARK_MODE } from "./src/config.ts";
import { BURNT_ORANGE } from "./src/colors.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Use burnt orange when ACCENT_COLOR === "burnt", else fall back to tailwind palette
        accent: ACCENT_COLOR === "burnt" ? BURNT_ORANGE : colors[ACCENT_COLOR.toLowerCase()],
        base: colors[BASE_COLOR.toLowerCase()],
      },
      fontFamily: {
        // Serif for headlines (Intercept/Tablet feel)
        serif: ['"Source Serif Pro"', '"Charter"', "Georgia", "serif"],
        // Sans for body
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  darkMode: MANUAL_DARK_MODE ? "class" : "media",
  plugins: [
    prose,
    forms,
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
    }),
  ],
};