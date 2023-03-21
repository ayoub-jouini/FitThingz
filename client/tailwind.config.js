/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        display: {
          large: "72px",
          medium: "64px",
          small: "54px",
        },
        heading: {
          h1: "42px",
          h2: "36px",
          h3: "28px",
          h4: "24px",
          h5: "18px",
          h6: "14px",
        },
        paragraph: {
          large: "16px",
          medium: "14px",
          small: "12px",
        },
      },
      palette: {
        primary: "#7F0517",
        secondary: "#121212",
        tertiary: "#F5F5F5",
        success: "#B6D33B",
        error: "#C51919",
        warning: "#E88010",
        textPrimary: "#383838",
        textSecondary: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
