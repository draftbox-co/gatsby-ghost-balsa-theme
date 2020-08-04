import { graphql } from "gatsby";

/**
 * These so called fragments are the fields we query on each template.
 * A fragment make queries a bit more reuseable, so instead of typing and
 * remembering every possible field, you can just use
 *   ...GhostPostFields
 * for example to load all post fields into your GraphQL query.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 *
 */

// Used for site config
export const siteMetadataFields = graphql`
  fragment SiteMetadataFields on SiteSiteMetadata {
    siteUrl
    postsPerPage
    siteTitleMeta
    siteDescriptionMeta
    shareImageWidth
    shareImageHeight
    shortTitle
    siteIcon
    backgroundColor
    themeColor
    siteTitle
    siteDescription
    language
    logoUrl
    alternateLogoUrl
    coverUrl
    metadata {
      title
      description
    }
    twitterCard {
      title
      description
      imageUrl
      username
    }
    facebookCard {
      title
      description
      imageUrl
      appId
      height
      width
    }
  }
`;

// Used for settings
export const ghostSettingsFields = graphql`
  fragment GhostSettingsFields on GhostSettings {
    title
    description
    logo
    icon
    cover_image
    facebook
    twitter
    lang
    timezone
    codeinjection_head
    codeinjection_foot
    codeinjection_styles
    navigation {
      label
      url
    }
  }
`;

export const allGhostPostsDescription = graphql`
  fragment AllGhostPostsDescription on GhostPostEdge {
    node {
      title
      excerpt
      slug
      published_at(formatString: "DD MMMM")
      updated_at(formatString: "DD MMMM")
      readingTime
      primary_author {
        name
        slug
      }
      tags {
        name
        slug
      }
      reading_time
      feature_image
      localFeatureImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        extension
        publicURL
      }
      primary_tag {
        name
        slug
      }
      featured
    }
  }
`;

export const ghostPostDescription = graphql`
  fragment GhostPostDetails on GhostPost {
    title
    og_title
    og_description
    feature_image
    excerpt
    twitter_title
    twitter_description
    meta_title
    meta_description
    tags {
      name
      slug
      visibility
    }
    primary_author {
      name
      slug
    }
    published_at(formatString: "DD MMMM YYYY")
    updated_at(formatString: "DD MMMM YYYY")
    slug
    childHtmlRehype {
      html
    }
    localFeatureImage {
      childImageSharp {
        fluid(maxWidth: 2000, sizes: "90") {
          ...GatsbyImageSharpFluid
        }
      }
      seo: childImageSharp {
        fixed(width: 1200, quality: 100) {
          src
        }
      }
      extension
      publicURL
    }
    featured
  }
`;

export const ghostPageDetails = graphql`
  fragment GhostPageDetails on GhostPage {
    title
    og_title
    og_description
    feature_image
    excerpt
    twitter_title
    twitter_description
    meta_title
    meta_description
    tags {
      name
      slug
      visibility
    }
    primary_author {
      name
      slug
    }
    published_at(formatString: "DD MMMM YYYY")
    updated_at(formatString: "DD MMMM YYYY")
    slug
    childHtmlRehype {
      html
    }
    localFeatureImage {
      childImageSharp {
        fluid(maxHeight: 360) {
          ...GatsbyImageSharpFluid
        }
      }
      seo: childImageSharp {
        fixed(width: 1200, quality: 100) {
          src
        }
      }
      extension
      publicURL
    }
  }
`;

export const ghostAuthorDetails = graphql`
  fragment GhostAuthorDetails on GhostAuthor {
    facebook
    cover_image
    bio
    slug
    url
    profile_image
    twitter
    website
    name
  }
`;
