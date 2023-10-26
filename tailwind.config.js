/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    
    
    
   
    keyframes: {
      "moveline": {
        "0%": { opacity: 0, transform: "translateX(0)", },
        "20%": { opacity: 0.6, },
        "50%": { opacity: 1 },
        "80%": { opacity: 0.6 },
        "100%": { opacity: 0, transform: "translateX(min(21vw, 25rem))" },
      },
    },
   animation: {
    "moveline": "moveline 1s linear infinite",
   }
  },
  
  // backgroundImage: {
  //  "glow-lines":
  //     "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
  //  },
  // plugins: [
  //   require('@tailwindcss/animation'),
  // ],


};
