/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#080A0E",
          900: "#0B0E14",
          800: "#10141C",
          700: "#161B25",
          600: "#1E2430",
          500: "#2A3140",
        },
        line: "rgba(255,255,255,0.08)",
        ink: {
          100: "#F4F6F9",
          300: "#C4CBD6",
          500: "#8891A0",
          700: "#5B6472",
        },
        cyan: {
          400: "#4FD8FF",
          500: "#2BC4F0",
          600: "#0EA5D9",
        },
        indigo: {
          400: "#8B7DFB",
          500: "#6E5CF0",
          600: "#5A46E0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(79,216,255,0.08), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}

