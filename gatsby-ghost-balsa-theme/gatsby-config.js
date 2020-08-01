const path = require(`path`);

const siteConfigDefaults = require(`./src/utils/siteConfig`);
const ghostConfigDefaults = require(`./src/utils/.ghost.json`);

const generateRSSFeed = require(`./src/utils/rss/generate-feed`);

module.exports = (themeOptions) => {
  const siteConfig = themeOptions.siteConfig || siteConfigDefaults;
  const ghostConfig = themeOptions.ghostConfig || ghostConfigDefaults;
  const finalConfig =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production;

  siteConfig.apiUrl = finalConfig.apiUrl;

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
      /**
       *  Utility Plugins
       */
      {
        resolve: require.resolve(`./plugins/gatsby-plugin-ghost-manifest`),
        options: {
          short_name: siteConfig.shortTitle,
          start_url: `/`,
          background_color: siteConfig.backgroundColor,
          theme_color: siteConfig.themeColor,
          display: `minimal-ui`,
          icon: `static/${siteConfig.siteIcon}`,
          legacy: true,
          query: `{
            site {
              siteMetadata {
                siteTitle
                siteDescription
              }
            }
          }`,
        },
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `{
            allGhostSettings {
              edges {
                node {
                  title
                  description
                }
              }
            }
          }`,
          feeds: [generateRSSFeed(siteConfig)],
        },
      },
      {
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
          query: `{
            allGhostPost {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostPage {
              edges {
                node {
                  id
                  slug
                  updated_at
                  created_at
                  feature_image
                }
              }
            }
            allGhostTag {
              edges {
                node {
                  id
                  slug
                  feature_image
                }
              }
            }
            allGhostAuthor {
              edges {
                node {
                  id
                  slug
                  profile_image
                }
              }
            }
          }
          `,
          mapping: {
            allGhostPost: {
              sitemap: `posts`,
            },
            allGhostTag: {
              sitemap: `tags`,
            },
            allGhostAuthor: {
              sitemap: `authors`,
            },
            allGhostPage: {
              sitemap: `pages`,
            },
          },
          exclude: [
            `/dev-404-page`,
            `/404`,
            `/404.html`,
            `/offline-plugin-app-shell-fallback`,
            "/offline",
            "/offline.html",
          ],
          createLinkInHead: true,
          addUncaughtPages: true,
        },
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-force-trailing-slashes`,
      `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true, // Print removed selectors and processed file names
          // develop: true, // Enable while using `gatsby develop`
          tailwind: true, // Enable tailwindcss support
          ignore: ["/ignored.css", "prismjs/", "docsearch.js/"],
          purgeOnly: ["components/", "styles/"],
          content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
        },
      },
      {
        resolve: `@draftbox-co/gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Montserrat",
                variants: ["400", "500", "600", "700"],
                //subsets: ['latin']
                //text: 'Hello'
                fontDisplay: "swap",
                strategy: "selfHosted", // 'base64' || 'cdn'
              },
              {
                family: "Merriweather",
                variants: ["300", "400", "500", "600", "700"],
                //subsets: ['latin']
                //text: 'Hello'
                fontDisplay: "swap",
                strategy: "selfHosted", // 'base64' || 'cdn'
              },
            ],
          },
          formats: ["woff2", "woff"],
          useMinify: true,
          usePreload: true,
          usePreconnect: true,
          blacklist: ["/amp"],
        },
      },
      {
        resolve: "@draftbox-co/gatsby-plugin-css-variables",
        options: {
          variables: [
            {
              varName: "--primary-color",
              value: `#2b6cb0`,
            },
            {
              varName: "--primary-color-active",
              value: `#2a4365`,
            },
            {
              varName: "--primary-color-light",
              value: `#bee3f8`,
            },
            {
              varName: "--sans-font",
              value: `"Montserrat", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            },
            {
              varName: "--sans-font-normal",
              value: `400`,
            },
            {
              varName: "--sans-font-medium",
              value: `500`,
            },
            {
              varName: "--sans-font-semibold",
              value: `600`,
            },
            {
              varName: "--sans-font-bold",
              value: `700`,
            },
            {
              varName: "--serif-font",
              value: `"Merriweather", Gerogia, Cambria, "Times New Roman", Times, serif`,
            },
            { varName: "--serif-font-light", value: `300` },
            { varName: "--serif-font-normal", value: `400` },
            { varName: "--serif-font-medium", value: `500` },
            { varName: "--serif-font-bold", value: `600` },
            {
              varName: "--mono-font",
              value: `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            },
          ],
        },
      },
      {
        resolve: `@draftbox-co/gatsby-plugin-amp`,
        options: {
          canonicalBaseUrl: siteConfig.siteUrl,
          components: [`amp-form`],
          excludedPaths: [`/404*`, `/`, `/offline*`],
          pathIdentifier: `amp/`,
          relAmpHtmlPattern: `{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}`,
          useAmpClientIdApi: true,
          dirName: __dirname,
          themePath: `src/amp-styles/post.amp.css`,
        },
      },
      {
        resolve: `gatsby-plugin-remove-generator`,
        options: {
          content: `Draftbox`,
        },
      },
    ],
  };
};
