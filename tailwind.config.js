import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      customYellow: "#fed434",
      customBlack: "#010101",
      customPink: "#f0b7ad",
      customBlue: "#0b00c7",
    },
    screens: {
      phone: "300px",
      tabletsm: "550px", // Custom phone breakpoint
      tablet: "768px", // Custom tablet breakpoint
      laptop: "1024px", // Custom laptop breakpoint
      desktop: "1280px", // Custom desktop breakpoint
      "large-desktop": "1600px", // Custom large desktop breakpoint
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
      osans: ["Open Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      bringdown: ["BRINGDOWN", "sans-serif"],
      robienz: ["Robienz", "sans-serif"],
      mirey: ["Mirey Personal Use"],
      bflick: ["Bright Flicks"],
      bas: ["Basillion"],
      oil: ["Oilrig"],
      megasta: ["Megasta Signateria Serif"],
      // Add Work Sans to the sans family
    },
  },
  plugins: [],
});
