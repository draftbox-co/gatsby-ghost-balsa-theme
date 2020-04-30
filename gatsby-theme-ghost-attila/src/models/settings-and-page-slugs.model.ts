export interface SettingsAndSlugs {
  ghostSettings: {
    title: string;
  };
  allGhostPage: {
    edges: { node: { slug: string } }[];
  };
}
