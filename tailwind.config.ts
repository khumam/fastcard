import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"]
      }
    },
    container: {
        padding: '10.625rem',
    },
  },
  plugins: [typography],
} satisfies Config;
