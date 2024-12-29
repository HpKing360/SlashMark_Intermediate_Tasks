/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        shortenDeskTop: "url('/bg-shorten-desktop.svg')",
        shortenMobile: "url('/bg-shorten-mobile.svg')",
        boostDeskTop: "url('/bg-boost-desktop.svg')",
        boostMobile: "url('/bg-boost-mobile.svg')",
      },
      colors: {
        primary_cyan: "hsl(180, 66%, 49%)",
        primary_dark_violet: "hsl(257, 27%, 26%)",
        secondary_red: "hsl(0, 87%, 67%)",
        neutral_gray: "hsl(0, 0%, 75%)",
        neutral_grayish_violet: "hsl(257, 7%, 63%)",
        neutral_very_dark_blue: "hsl(255, 11%, 22%)",
        neutral_very_dark_violet: "hsl(260, 8%, 14%)",
        hover: "hsl(180, 97%, 77%)",
      },
    },
  },
  plugins: [],
};
