import React from "react";
import Layout from "../components/Layout";
import CtaBig from "../components/CtaBig";
import { graphql } from "gatsby";
import { AllGhostPostDescription } from "../models/all-post-description.model";
import randomColor from "randomcolor";
import { PaginationContext } from "../models/pagination.model";
import { Link } from "gatsby";
import classNames from "classnames";

type IndexPageProps = {
  data: {
    allGhostPost: AllGhostPostDescription;
  };
  pageContext?: PaginationContext;
};

const IndexPage: React.FC<IndexPageProps> = ({
  data: { allGhostPost },
  pageContext,
}) => {
  return (
    <div>
      <Layout>
        <section
          className="text-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)",
          }}
        >
          <div className="relative flex items-center py-32">
            <div className="absolute bg-black opacity-50 inset-0" />
            <div className="z-10 max-w-2xl mx-auto px-4">
              <h1 className="mb-4 text-4xl leading-tight font-semibold font-heading text-white">
                The Dunder Mifflin Blog
              </h1>
              <p className="text-2xl leading-tight font-light text-white">
                The official voice of Dunder Mifflin branch in Scranton. It's a
                place for us to talk about news, product, community, businesses
                and more at Dunder Mifflin.
              </p>
            </div>
          </div>
        </section>
        <div className="spacer my-8"></div>
        <section className="px-4 container mx-auto">
          <div className="flex justify-center flex-wrap -mx-4">
            {allGhostPost.edges.map(({ node }, i) => {
              const excerpt =
                node.excerpt.split(" ").length > 30
                  ? node.excerpt.split(" ").slice(0, 30).join(" ") + "..."
                  : node.excerpt;
              return (
                <div
                  key={i}
                  className="w-full lg:w-1/3 px-4 mb-8 cursor-pointer"
                >
                  <div className="h-full rounded shadow-md flex flex-col justify-between">
                    <div>
                      {node.feature_image && (
                        <img
                          className="mb-4 h-48 w-full object-cover rounded-t"
                          src={node.feature_image}
                        />
                      )}
                      {!node.feature_image && (
                        <div
                          className="flex justify-center items-center text-white font-black mb-4 h-48 w-full object-cover rounded-t"
                          style={{
                            backgroundColor: randomColor({
                              luminosity: "light",
                            }),
                            fontSize: "6rem",
                          }}
                        >
                          {node.title[0]}
                        </div>
                      )}

                      <div className="px-6">
                        <div className="mb-4">
                          <p className="text-sm text-gray-500">
                            {node.updated_at}
                            <span className="mx-2">•</span>
                            <span className="text-gray-600">
                              {node.tags.map((tag, i) => {
                                return (
                                  <a
                                    key={i}
                                    className="no-underline hover:underline mr-2"
                                    href="/tag.html"
                                  >
                                    {tag.name}
                                  </a>
                                );
                              })}
                            </span>
                          </p>
                          <h3 className="text-2xl my-2 font-heading font-semibold tracking-tight leading-tight">
                            {node.title}
                          </h3>
                          <p className="text-gray-600 font-serif">{excerpt}</p>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex justify-between px-6">
                      <a
                        className="text-gray-600 no-underline hover:underline"
                        href="/author.html"
                      >
                        <small>{node.primary_author.name}</small>
                      </a>
                      {node.reading_time ? (
                        <small className="text-gray-500">
                          {node.reading_time} min read
                        </small>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center">
          <ul className="my-8 overflow-hidden inline-flex mx-auto list-reset border border-grey-light rounded">
            <li>
              <Link
                className={classNames(
                  "block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500",
                  { "border-r border-grey-light": pageContext.nextPagePath }
                )}
                to={`${pageContext.previousPagePath}`}
                data-config-id="prev"
              >
                Newer Posts
              </Link>
            </li>

            <li>
              {pageContext.nextPagePath && (
                <Link
                  className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500"
                  to={`${pageContext.nextPagePath}`}
                  data-config-id="next"
                >
                  Older Posts
                </Link>
              )}
            </li>
          </ul>
        </div>
        <CtaBig />
      </Layout>
    </div>
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
  }
`;
