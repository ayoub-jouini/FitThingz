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
      fontSize: {
        "2xs": "0.75rem", //12px
        xs: "0.875rem", //14px
        sm: "1rem", //16px
        base: "1.125rem", //18px
        l: "1.25rem", //20px
        lg: "1.5rem", //24px
        xl: "1.75rem", //28px
        "2xl": "2.25rem", //36px
        "3xl": "2.625rem", //42px
        "4xl": "3.375rem", //54px
        "5xl": "4rem", //64px
        "6xl": "4.5rem", //72px
      },
      colors: {
        primary: "#A4022D",
        secondary: "#121212",
        tertiary: "#F5F5F5",
        success: "#B6D33B",
        error: "#C51919",
        warning: "#E88010",
        textPrimary: "#383838",
        textSecondary: "#F5F5F5",
        grisPrimary: "#D7D6D5",
        grixSecondary: "#808080",
        grisTertiary: "#BAB9B9",
      },
      backgroundImage: {
        signup: "url(/images/Backgroundsignup.png)",
      },
    },
  },
  plugins: [],
};
