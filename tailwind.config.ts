import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "comme": "Comme",
      'encode-sans': ['"Encode Sans"', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'custom': '28.34px',
        'customnav': '17.5px',
        'custommenu': '16.25px',
        'custombreadcrumb': '20px',
        'customCardText': '25.62px',
        'customProductPrice': '23.49px',
        'customOldPrice': '14.95px',
        'customPriceDiscount': '14.95px'
      },
      letterSpacing: {
        'custom': '0.54em',
        'customnav': '0.1em',
        'custommenu': '0.1em',
        'custombreadcrumb': '0.1em',
        'customCardText': '.05em',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
