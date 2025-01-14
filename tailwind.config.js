/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f59e0b",
          secondary: "#2563eb",
          accent: "#f7f7f7",
          neutral: "#374151",
          "base-100": "#e5e7eb",
          info: "#00caff",
          success: "#4ade80",
          warning: "#f97316",
          error: "#ef4444",
        },
      },
      "light",
      "sunset",
    ],
    darkTheme: "dark",
  },
};
