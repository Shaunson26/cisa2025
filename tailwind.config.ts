import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        dynapuff: ["DynaPuff", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          50: "hsl(var(--background-50))",
          100: "hsl(var(--background-100))",
          200: "hsl(var(--background-200))",
          300: "hsl(var(--background-300))",
          400: "hsl(var(--background-400))",
          500: "hsl(var(--background-500))",
          600: "hsl(var(--background-600))",
          700: "hsl(var(--background-700))",
          800: "hsl(var(--background-800))",
          900: "hsl(var(--background-900))",
          950: "hsl(var(--background-950))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          50: "hsl(var(--foregound-50))",
          100: "hsl(var(--foreground-100))",
          200: "hsl(var(--foreground-200))",
          300: "hsl(var(--foreground-300))",
          400: "hsl(var(--foreground-400))",
          500: "hsl(var(--foreground-500))",
          600: "hsl(var(--foreground-600))",
          700: "hsl(var(--foreground-700))",
          800: "hsl(var(--foreground-800))",
          900: "hsl(var(--foreground-900))",
          950: "hsl(var(--foreground-950))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--background))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--background))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          50: "hsl(var(--tertiary-50))",
          100: "hsl(var(--tertiary-100))",
          200: "hsl(var(--tertiary-200))",
          300: "hsl(var(--tertiary-300))",
          400: "hsl(var(--tertiary-400))",
          500: "hsl(var(--tertiary-500))",
          600: "hsl(var(--tertiary-600))",
          700: "hsl(var(--tertiary-700))",
          800: "hsl(var(--tertiary-800))",
          900: "hsl(var(--tertiary-900))",
          950: "hsl(var(--tertiary-950))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          50: "hsl(var(--accent-50))",
          100: "hsl(var(--accent-100))",
          200: "hsl(var(--accent-200))",
          300: "hsl(var(--accent-300))",
          400: "hsl(var(--accent-400))",
          500: "hsl(var(--accent-500))",
          600: "hsl(var(--accent-600))",
          700: "hsl(var(--accent-700))",
          800: "hsl(var(--accent-800))",
          900: "hsl(var(--accent-900))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--background))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
