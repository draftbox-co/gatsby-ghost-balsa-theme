export interface ChildHtmlRehype {
  html: string;
}

export interface PrimaryAuthor {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface GhostPost {
  childHtmlRehype: ChildHtmlRehype;
  title: string;
  slug: string;
  feature_image?: any;
  primary_author: PrimaryAuthor;
  updated_at: string;
  localFeatureImage: {
    childImageSharp: {
      fluid: any;
    };
    seo: {
      fixed: {
        src: string;
      };
    };
    publicURL: string;
    extension: string;
  };
  og_title: string;
  twitter_title: string;
  twitter_description: string;
  meta_title: string;
  meta_description: string;
  tags: Tag[];
  primary_tag: {
    name: string;
    slug: string;
  };
  published_at: string;
  og_description: string;
  excerpt: string;
}

export interface GhostPostDescription {
  ghostPost: GhostPost;
}
