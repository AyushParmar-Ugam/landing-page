/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5F1",      // warm off-white background
        ink: "#14171F",        // primary text, near-black
        muted: "#5B6570",      // secondary text
        line: "#E4E1D8",       // hairline borders on paper
        teal: {
          50: "#EAF2EF",
          100: "#CFE3DC",
          400: "#4C8C79",
          600: "#2F6F5E",       // primary brand color
          700: "#255A4C",
          900: "#163A30"
        },
        gold: {
          100: "#FBEFD1",
          400: "#E7B84B",       // accent color, used sparingly
          600: "#C99A2E"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"]
      },
      maxWidth: {
        content: "1120px"
      }
    }
  },
  plugins: []
};
