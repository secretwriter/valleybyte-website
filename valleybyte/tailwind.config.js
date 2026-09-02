/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0A0E16",
          soft: "#0D1220",
        },
        surface: {
          DEFAULT: "#111726",
          raised: "#161D2E",
        },
        ink: {
          DEFAULT: "#F3F5F9",
          muted: "#93A0B7",
          faint: "#5B6478",
        },
        electric: {
          50: "#EAF6FF",
          200: "#9FDCFF",
          400: "#4CB6FF",
          500: "#2E9AFF",
          600: "#1C7DE0",
        },
        violet: {
          400: "#8A7CFF",
          500: "#7358FF",
          600: "#5A3EE0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,154,255,0.15), 0 8px 40px -8px rgba(46,154,255,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px -16px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(46,154,255,0.14), transparent)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
