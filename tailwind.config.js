/** @type {import('tailwindcss').Config} */
import  withMT from "@material-tailwind/react/utils/withMT";

 let v  = 
{
   content: [
  
      './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
      './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        intria: "var(--intria-sans)",
      },
      colors: {
        primary: "#FFD600",
        secondary: "black",
        secondary2: "white",

        dark1:"#0F0D0D",
        dark2: "#16171F",
        
        light1:"#FAFAFB",
        light2: "#FFFFFF",
        gray1:"#737A85"
        
        
      },
      boxShadow: {
        customShadow1: "0px 50px 60px 14px #22222224",
        customShadow2: "20.360382080078125px 25.450477600097656px 43.26580810546875px 0px #0000001A",
        customShadow3: "1.0094696283340454px 50.473480224609375px 60.56817626953125px 14.132575035095215px #22222224",
        customShadow4: "0px 0px 20px 0px #00000012",
        customShadow5: "0px 50px 60px 14px #2222220A"


      },
      keyframes: {
        slideinright: {
          '0%': { transform: 'translateX(-100%) ', opacity: "0" ,display:"flex" },
          '50%': { transform: 'translateX(-50%)', opacity: "0.5" ,display:"flex"  },
          '100%': { transform: 'translateX(0%)', opacity: "1",display:"flex"},
        }
      },
      keyframes: {
        slideinleft: {
          '0%': { transform: 'translateX(0%) ', opacity: "1" ,  },
          '50%': { transform: 'translateX(-50%)', opacity: "0.5" },
          '100%': { transform: 'translateX(-100%)', opacity: "0" ,display:"none"  },
        }
      },
      animation: {
        slideinleft: 'slideinleft 0.5s ease-in-out forwards',
        slideinright: 'slideinright 0.5s ease-in-out forwards',
      },
      
    }
  },
  darkMode: 'class',
  plugins: [],
};


module.exports = v