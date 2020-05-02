const path = require("path");

module.exports = () => ({
  plugins: [
    require("tailwindcss")(
      path.join(
        process.cwd(),
        "../gatsby-theme-ghost-attila/tailwind.config.js"
      )
    ),
    require("autoprefixer"),
  ],
});
