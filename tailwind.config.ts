import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'github-actions': "url('../../public/images/github-actions.jpg')",
      // },
      fontSize: {
        posts: "0.95rem",
      },
      colors: {
        "background-color": "var(--background-color)",
        "accent-color": "var(--accent-color)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "tags-color": "var(--tags-color)",
        "border-color": "var(--border-color)",
        "code-snippet-background-color": "var(--code-snippet-background-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
