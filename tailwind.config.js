/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  safelist: [
    {
      pattern: /tw-bg-(red|green|blue|purple|amber|etc)-\d{3}/,
      variants: ["hover", "focus"],
    },
    {
      pattern: /tw-text-(red|green|blue|purple|amber|etc)-\d{3}/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};