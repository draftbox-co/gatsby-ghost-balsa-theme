import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { AllGhostPostDescription } from "../models/all-post-description.model";
import { PaginationContext } from "../models/pagination.model";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import { AuthorDescription } from "../models/author-description.model";
import userAvatar from "../images/female_avatar.svg";

type AuthorTemplateProps = {
  data: {
    allGhostPost: AllGhostPostDescription;
    ghostAuthor: AuthorDescription;
  };
  location: any;
  pageContext?: PaginationContext;
};

const AuthorTemplate: React.FC<AuthorTemplateProps> = ({
  data,
  location,
  pageContext,
}) => {
  const { allGhostPost, ghostAuthor } = data;
  return (
    <Layout>
      <section
        className="text-center bg-cover bg-center"
        style={{ backgroundColor: "pink" }}
      >
        <div className="relative flex items-center py-32">
          <div className="absolute bg-primaryActive inset-0"></div>
          <div className="z-10 max-w-2xl mx-auto px-4">
            <img
              className="w-16 mx-auto mb-4 rounded-full"
              src={
                ghostAuthor.profile_image
                  ? ghostAuthor.profile_image
                  : userAvatar
              }
              alt=""
            />
            <h1 className="mb-4 text-3xl leading-tight font-sansSemibold text-white break-words">
              {ghostAuthor.name}
            </h1>
            {/* <span className="text-lg font-semibold font-sans text-white">
              Regional Manager
            </span> */}
            {ghostAuthor.bio && (
              <p
                className="text-xl font-serifLight text-white opacity-85"
                dangerouslySetInnerHTML={{ __html: ghostAuthor.bio }}
              ></p>
            )}
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
      <Pagination pageContext={pageContext} />
    </Layout>
  );
};

export default AuthorTemplate;

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorDetails
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        ...AllGhostPostsDescription
      }
    }
  }
`;
