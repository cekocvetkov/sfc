import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      smm: "486px",
      sm: "640px",
      mdd: "872px",
      md: "948px",
      lgg: "1025px",
      lggg: "1066px",
      lg: "1155px",
      xl: "1280px",
      "2xl": "1536px",
      "2xll": "1605px",
      "3xl": "1800px", // Your new custom breakpoint
      "4xl": "2400px", // Your new custom breakpoint
    },
    extend: {
      fontSize: {
        posts: "0.95rem",
      },
      colors: {
        "background-color": "var(--background-color)",
        "accent-color": "var(--accent-color)",
        "accent-color-darker": "var(--accent-color-darker)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "secondary-text-color2": "var(--secondary-text-color2)",
        "tags-color": "var(--tags-color)",
        "border-color": "var(--border-color)",
        "code-snippet-background-color": "var(--code-snippet-background-color)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
export default config;
