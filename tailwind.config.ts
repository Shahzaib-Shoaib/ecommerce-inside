import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "350px" },
        md: { min: "351px", max: "480px" },
        lg: { min: "481px", max: "768px" },
        xl: { min: "769px", max: "880px" },
        "2xl": { min: "881px", max: "1024px" },
        "3xl": { min: "1025px", max: "1280px" },
        "4xl": { min: "1281px", max: "1366px" },
        "5xl": { min: "1367px", max: "1444px" },
        "6xl": { min: "1445px", max: "1920px" },
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        darkblue: "#201949",
        caribbeangreen: "#00E2A1",
        dark: "#0f0c16",
        darkgray: "#666",
      },
      fontSize: {
        // sm: [fontSize, lineHeight],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],

        //tagName ['fontSize', { lineHeight?, letterSpacing?, fontWeight? }]
        h1: [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "500",
          },
        ],
        h2: [
          "1.875rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        h4: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        h5: [
          "1.125rem",
          {
            lineHeight: "1.625rem",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        p: [
          "0.9rem",
          {
            lineHeight: "1.1rem",
          },
        ],
        span: [
          "0.9rem",
          {
            lineHeight: "1.1rem",
          },
        ],
        quote: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "600",
          },
        ],
      },
      keyframes:{
        "move-left": {
          "0%": {
            left: "-20px",
          },
          "50%": {
            left:"50%",
            width: "20px",
            height: "20px",
          },
          "100%": {
            left:"50%",
            width: "400px",
            height: "400px",
          },
        },
        "move-right": {
          "0%": {
            right: "-20px",
          },
          "50%": {
            right:"50%",
            width: "20px",
            height: "20px",
          },
          "100%": {
            right:"50%",
            width: "400px",
            height: "400px",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "appear-down": {
          "0%": {
            opacity: "1",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(-10px)",
          },
        },
        "grow-shrink": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "circle-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(45deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        "circle-rotate": {
          "0%": {
            background: "rotate(0deg)",
          },
          "50%": {
            background: "rotate(45deg)",
          },
          "100%": {
            background: "rotate(0deg)",
          },
        },
      },
      animation: {
        "move-left": "move-left 0.8s ",
        "move-right": "move-right 0.8s ",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "appear-down": "appear-down 0.5s ease-out",
        "grow-shrink": "grow-shrink 1.8s infinite",
        "circle-spin": "circle-spin 8s ease infinite",
        "circle-rotate": "circle-rotate 8s ease infinite",
      }
    },
  },
  plugins: [],
} satisfies Config;
