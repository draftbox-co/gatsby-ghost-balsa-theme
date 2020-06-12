interface Navigation {
  label: string;
  url: string;
}

interface SocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string
}

export interface SettingsAndSlugs {
  ghostSettings: {
    title: string;
    navigation: Navigation[];
    facebook: string;
    twitter: string;
    logo: string;
    lang: string;
  };
  site: {
    siteMetadata: {
      siteUrl: string;
      apiUrl: string;
      header: {
        navigation: Navigation[]
      };
      footer: {
        navigation: Navigation[],
        copyright: string;
      };
      subscribeWidget: {
        title: string;
        helpText: string;
        successMessage: string;
      },
      socialLinks: SocialLinks
    };
  };
}
