const defaultConfig = require("tailwindcss/defaultConfig");
const formsPlugin = require("@tailwindcss/forms");
const daisyui = require("daisyui");

module.exports = {
  mode: "jit",
  purge: ["index.html", "src/**/*.tsx"],

  theme: {
    fontFamily: {
      sans: ["Inter", defaultConfig.theme.fontFamily.sans],
    },
  },
  daisyui: {
    themes: false,
  },
  darkMode: "media",
  plugins: [formsPlugin, daisyui],
};
