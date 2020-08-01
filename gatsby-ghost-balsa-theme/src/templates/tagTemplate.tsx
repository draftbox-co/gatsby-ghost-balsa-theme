import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { PaginationContext } from "../models/pagination.model";
import { AllGhostPostDescription } from "../models/all-post-description.model";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import { MetaData } from "../components/meta";
import classNames from "classnames";

interface GhostTagDescription {
  description: string;
  feature_image: string;
  slug: string;
  name: string;
  postCount: number;
}

type TagTemplateProps = {
  location: any;
  pageContext: PaginationContext;
  data: {
    allGhostPost: AllGhostPostDescription;
    ghostTag: GhostTagDescription;
  };
};

const TagTemplate: React.FC<TagTemplateProps> = ({
  data,
  location,
  pageContext,
}) => {
  const { ghostTag, allGhostPost } = data;
  return (
    <Layout>
      <MetaData data={data} location={location} />
      <section
        className="text-center bg-cover"
        style={{
          backgroundImage: ghostTag.feature_image
            ? ghostTag.feature_image
            : "none",
        }}
      >
        <div className="relative flex items-center py-32">
          <div
            className={classNames("absolute inset-0", {
              "bg-black opacity-50": ghostTag.feature_image,
              "bg-primaryActive": !ghostTag.feature_image,
            })}
          />
          <div className="z-10 max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-sansSemibold text-white capitalize">
              {ghostTag.name}
            </h3>
            <span className="font-sansSemibold text-white">
              {ghostTag.postCount} {ghostTag.postCount > 1 ? "posts" : "post"}
            </span>
          </div>
        </div>
      </section>
      <div className="my-8"></div>
      <section className="px-4 container mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          {allGhostPost.edges.map(({ node }, i) => {
            return <PostCard post={node} key={i} />;
          })}
        </div>
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export default TagTemplate;

export const TagTemplateQuery = graphql`
  query($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      name
      description
      postCount
      feature_image
      slug
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        ...AllGhostPostsDescription
      }
    }
  }
`;
