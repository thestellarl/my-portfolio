/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#efefef",
        color1: "#A3B18A",
        color2: "#588157",
        color3: "#344E41",
        dark3: "#474448",
        light1: "#F1F0EA",
        light2: "#E0DDCF",
      },
    },
    fontFamily: {
      sans: [
        "BeVietnam-Regular",
        '"Inter"',
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
      ],
    },
    gradientColorStopPositions: {
      5: "5%",
    },
  },
  plugins: [],
};
