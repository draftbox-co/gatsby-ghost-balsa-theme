import React from "react";
import Layout from "../components/Layout";
import CtaBig from "../components/CtaBig";
import { graphql } from "gatsby";
import { AllGhostPostDescription } from "../models/all-post-description.model";
import { PaginationContext } from "../models/pagination.model";
import { MetaData } from "../components/meta";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import classNames from "classnames";

type IndexPageProps = {
  data: {
    allGhostPost: AllGhostPostDescription;
    ghostSettings: {
      title: string;
      description: string;
      cover_image: string;
    };
  };
  location: any;
  pageContext?: PaginationContext;
};

const IndexPage: React.FC<IndexPageProps> = ({
  data,
  location,
  pageContext,
}) => {
  const { allGhostPost, ghostSettings } = data;

  return (
    <Layout>
      <MetaData data={data} location={location} />
      <section
        className="text-center bg-cover max-w-full"
        style={{
          backgroundImage: `url(${
            ghostSettings.cover_image ? ghostSettings.cover_image : "none"
          })`,
        }}
      >
        <div className="relative flex items-center py-32">
          <div
            className={classNames("absolute inset-0", {
              "bg-black opacity-50": ghostSettings.cover_image,
              "bg-blue-900": !ghostSettings.cover_image,
            })}
          />
          <div className="z-10 max-w-2xl mx-auto px-4">
            <h1
              dangerouslySetInnerHTML={{ __html: ghostSettings.title }}
              className="mb-4 text-4xl leading-tight font-semibold font-heading text-white break-all"
            ></h1>
            <p
              dangerouslySetInnerHTML={{ __html: ghostSettings.description }}
              className="text-2xl leading-tight font-light text-white break-all"
            ></p>
          </div>
        </div>
      </section>
      <div className="spacer my-8"></div>
      <section className="px-4 container mx-auto">
        <div className="flex justify-center flex-wrap -mx-4">
          {allGhostPost.edges.map(({ node }, i) => {
            return <PostCard post={node} key={i} />;
          })}
        </div>
      </section>

      {/* Pagination */}
      <Pagination pageContext={pageContext} />
      <CtaBig />
    </Layout>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { slug: { ne: "data-schema" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        ...AllGhostPostsDescription
      }
    }

    ghostSettings {
      title
      description
      cover_image
    }
  }
`;
