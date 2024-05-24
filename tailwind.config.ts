import type { Config } from "tailwindcss";
import { breakpoints } from "./src/constants/breakpoints";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: [`var(--font-roboto)`],
        inter: [`var(--font-inter)`],
      },
      screens: {
        xs: `${breakpoints.small_mobile}px`,
        // => @media (min-width: 320px) { ... }

        sm: `${breakpoints.mobile}px`,
        // => @media (min-width: 414px) { ... }

        md: `${breakpoints.tablet}px`,
        // => @media (min-width: 768px) { ... }

        lg: `${breakpoints.desktop}px`,
        // => @media (min-width: 1440px) { ... }
      },

      colors: {
        dark_blue: "#243650",
        text_white: "#F0F0F0",
        blue_action: "#4488ED",
        gray_our: "#9A9EA2",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        size_12: "12px",
        size_13: "13px",
        size_14: "14px",
        size_16: "16px",
        size_17: "17px",
        size_18: "18px",
        size_20: "20px",
        size_22: "22px",
        size_24: "24px",
        size_28: "28px",
        size_32: "32px",
        size_40: "40px",
        size_150: "150px",
        size_200: "200px",
        size_250: "250px",
      },
      fontWeight: {
        weight_300: "300",
        weight_400: "400",
        weight_500: "500",
        weight_600: "600",
        weight_700: "700",
        weight_800: "800",
      },
      lineHeight: {
        line_height_10: "1",
        line_height_12: "1.2",
        line_height_15: "1.15",
        line_height_16: "1.16",
        line_height_17: "1.17",
        line_height_20: "1.2",
        line_height_21: "1.21",
        line_height_22: "1.22",
        line_height_24: "1.24",
        line_height_25: "1.25",
        line_height_28: "1.28",
        line_height_29: "1.29",
        line_height_30: "1.3",
        line_height_31: "1.31",
        line_height_40: "1.4",
        line_height_50: "1.5",
        line_height_60: "1.6",
        line_height_71: "1.71",
        line_height_75: "1.75",
      },
    },
  },
  plugins: [],
};
export default config;
