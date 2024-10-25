import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url(/images/bg.jpg)",
      },
      colors: {
        background: "var(--background)",
        background_secondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primary_foreground: "var(--primary-foreground)",
        secondary: "var(--secondary)",
        thirdly: "var(--thirdly)",
        accent: "var(--accent)",
        accent_hover: "var(--accent-hover)",
        success: "var(--success)",
        success_secondary: "var(--success-secondary)",
        input: "var(--input)",
        muted: "var(--muted)",
        gmail: "var(--gmail)",
        dark: "var(--dark)",
      },
    },
  },
  plugins: [],
};

export default config;
