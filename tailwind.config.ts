import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "bay-of-many": {
          50: "#EFF3FF",
          100: "#DBE4FE",
          200: "#BFCFFE",
          300: "#93AEFD",
          400: "#6088FA",
          500: "#3B6BF6",
          600: "#2558EB",
          700: "#1D4DD8",
          800: "#1E44AF",
          900: "#1E3A8A",
          950: "#172754",
        },
        "wild-sand": {
          50: "#F3F4F6",
          100: "#EDEEF1",
          200: "#D7DBE0",
          300: "#B3BBC6",
          400: "#8A96A6",
          500: "#6C798B",
          600: "#566173",
          700: "#474F5D",
          800: "#3D444F",
          900: "#363B44",
          950: "#24272D",
        },
        "mountain-meadow": {
          50: "#ECFDF7",
          100: "#D1FAEC",
          200: "#A7F3DA",
          300: "#6EE7BF",
          400: "#34D39E",
          500: "#10B981",
          600: "#059666",
          700: "#047852",
          800: "#065F42",
          900: "#064E36",
          950: "#002222",
        },
        "oxford-blue": {
          50: "#F6F7F9",
          100: "#ECEEF2",
          200: "#D4DAE3",
          300: "#AFBACA",
          400: "#8495AC",
          500: "#647793",
          600: "#506079",
          700: "#414E63",
          800: "#374151",
          900: "#333B47",
          950: "#22272F",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "muted-card": {
          DEFAULT: "hsl(var(--muted-card))",
          foreground: "hsl(var(--muted-card-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
        lato: "var(--font-lato)",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
