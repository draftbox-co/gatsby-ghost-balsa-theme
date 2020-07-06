interface Navigation {
  label: string;
  url: string;
}

interface SocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
}

export interface SettingsAndSlugs {
  site: {
    siteMetadata: {
      siteUrl: string;
      apiUrl: string;
      header: {
        navigation: Navigation[];
      };
      footer: {
        navigation: Navigation[];
        copyright: string;
      };
      subscribeWidget: {
        title: string;
        helpText: string;
        successMessage: string;
      };
      socialLinks: SocialLinks;
      logoUrl: string;
      siteTitle: string;
      language: string
    };
  };
}
