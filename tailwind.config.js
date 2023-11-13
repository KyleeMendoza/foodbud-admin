/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        //B&W
        white: "#FFFDF9",
        white100: "#ffffff",
        black: "#2F2F2F",
        black100: "#fdfdfd",
        orange:"#ff8744",
        green: "#05E200",
        gray: "#303030",
        darkgray: "#ECECEC",
        
      //Primary Color - Pink
        primary50: "#fde9ef",
        primary100: "#fcdde8",
        primary200: "#F598B7",
        primary250: '#FF78A4',
        primary300: "#e91e63",
        primary400: "#d21b59",
        primary500: "#E7238B",
        primary600: "#af041a",
        primary700: "#8c123b",
        primary800: "#690d2d",
        primary900: "#520b23",
        primary1000: "#FF3375",
        primary1100: "#F06896",
        
      //Secondary Color - Blue
        secondary50: "#e9f5fe",
        secondary100: "#badefb",
        secondary200: "#99cff9",
        secondary300: "#6ab9f7",
        secondary400: "#4dabf5",
        secondary500: "#2196f3",
        secondary600: "#1e89dd",
        secondary700: "#176bad",
        secondary800: "#125386",
        secondary900: "#0e3f66",
  
      //Accent Color - another Blue
        accent50: "#e6f6fe",
        accent100: "#b1e4fc",
        accent200: "#8bd7fa",
        accent300: "#56c5f8",
        accent400: "#35baf6",
        accent500: "#03a9f4",
        accent600: "#039ade",
        accent700: "#0278ad",
        accent800: "#025d86",
        accent900: "#014766",
  
        bgblur: "rgba(0,0,0,0.55)",
      },
  
      //Font sizes
      fontSize:{
        heading14: '33px',
        heading25: '28px',
        heading36: '23px',
        title13: '19px',
        title24: '16px',
        body: '13px',
        caption: '11px',
      },
  
      screens:{
        'monitor': '1440px',
        'ipadmini':'744px',
      },

      flex: {
        'ooh': '2 2 100%'
      },

      fontFamily: {
        //Page Visitor
          lalezar: ['Lalezar'],
  
        //Portals
          heading: ['Poppins'],
          tbc: ['DM Sans'],
        },
      backgroundImage: {
        //Radial Gradient
        'gradient-radial': 'radial-CanvasGradient(var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
};
