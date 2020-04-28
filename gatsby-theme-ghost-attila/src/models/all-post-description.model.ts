export interface PrimaryAuthor {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Node {
  title: string;
  excerpt: string;
  updated_at: string;
  primary_author: PrimaryAuthor;
  tags: Tag[];
  reading_time?: number;
  feature_image: any;
}

export interface Edge {
  __typename: string;
  node: Node;
}

export interface AllGhostPostDescription {
  edges: Edge[];
}
