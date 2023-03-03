/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Galantis: ["Galantis"],
      Rosellinda: ["Rosellinda Alyamore"],
      GoldenPlains: ["Golden Plains"],
      sfp_Thin: ["sfp_Thin"],
      sfp_Light: ["sfp_Light"],
      sfp_UltraLight: ["sfp_UltraLight"],
      sfp_Black: ["sfp_Black"],
      sfp_Medium: ["sfp_Medium"],
      sfp_Regular: ["sfp_Regular"],
      sfp_SemiBold: ["sfp_SemiBold"],
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '1xl': '1.563rem',
      '2xl': '2rem',
      '2.5xl': '2.5',

    }
  },
  plugins: [],
}
