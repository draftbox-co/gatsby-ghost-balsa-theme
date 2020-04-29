const path = require(`path`);

const siteConfigDefaults = require(`./src/utils/siteConfig`);
const ghostConfigDefaults = require(`./src/utils/.ghost.json`);

const generateRSSFeed = require(`./src/utils/rss/generate-feed`);

module.exports = (themeOptions) => {
  const siteConfig = themeOptions.siteConfig || siteConfigDefaults;
  const ghostConfig = themeOptions.ghostConfig || ghostConfigDefaults;

  return {
    siteMetadata: siteConfig,
    plugins: [
      `gatsby-plugin-typescript`,
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(__dirname, `src`, `images`),
          name: `images`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-ghost`,
        options:
          process.env.NODE_ENV === `development`
            ? ghostConfig.development
            : ghostConfig.production,
      },
      {
        resolve: `gatsby-transformer-rehype`,
        options: {
          filter: (node) =>
            node.internal.type === `GhostPost` ||
            node.internal.type === `GhostPage`,
          plugins: [
            {
              resolve: `gatsby-rehype-prismjs`,
            },
            {
              resolve: `gatsby-rehype-ghost-links`,
            },
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-force-trailing-slashes`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true, // Print removed selectors and processed file names
          // develop: true, // Enable while using `gatsby develop`
          tailwind: true, // Enable tailwindcss support
          ignore: ["/ignored.css", "prismjs/", "docsearch.js/"],
          purgeOnly: ["components/", "styles/"],
          content: [
            path.join( process.cwd(), '../gatsby-theme-ghost-attila/src/**/!(*.d).{ts,js,jsx,tsx}' ),
          ],
        },
      },
      {
        resolve: `@armada-inc/gatsby-plugin-amp`,
        options: {
          canonicalBaseUrl: siteConfig.siteUrl,
          components: [`amp-form`],
          excludedPaths: [`/404*`, `/`],
          pathIdentifier: `amp/`,
          relAmpHtmlPattern: `{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}`,
          useAmpClientIdApi: true,
          dirName: __dirname,
          themePath: `src/amp-styles/post.amp.css`,
        },
      },
    ],
  };
};
