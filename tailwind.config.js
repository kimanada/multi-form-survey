/** @type {import('tailwindcss').Config} */
import colors from './tailwind/colors';
import utilities from './tailwind/utilities';

const px0_200 = Array.from({ length: 201}, (_, i) => `${i}px`);
const px0_20 = Array.from({ length: 21 }, (_, i) => `${i}px`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '820px' //820px 이상일 때 적용 
    },
    extend: {
      spacing: {
        ...px0_200,
      },
      borderWidth: {
        ...px0_20,
      },
      borderRadius: {
        ...px0_20,
      },
      fontSize: {
        ...px0_200,
      },
      colors,
    },
  },
  plugins: [utilities],
}

