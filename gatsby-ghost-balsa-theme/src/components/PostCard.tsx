import React from "react";
import { Link, navigate } from "gatsby";
import { GhostPostDescription } from "../models/all-post-description.model";
import Img from "gatsby-image";

type PostCardTypes = {
  post: GhostPostDescription;
};

const PostCard: React.FC<PostCardTypes> = ({ post }) => {
  const excerpt =
    post.excerpt.split(" ").length > 30
      ? post.excerpt.split(" ").slice(0, 30).join(" ") + "..."
      : post.excerpt;

  const handleNavigation = (e: any, slug) => {
    e.stopPropagation();
    navigate(slug);
  };
  return (
    <div
      onClick={(e) => handleNavigation(e, `/${post.slug}`)}
      className="w-full lg:w-1/3 px-4 mb-8 cursor-pointer"
    >
      <div className="h-full rounded shadow-md flex flex-col justify-between">
        <div>
          {post.localFeatureImage && post.localFeatureImage.childImageSharp && post.localFeatureImage.extension !== 'svg'  && (
            <Img
              className="mb-4 h-48 w-full object-cover rounded-t"
              fluid={post.localFeatureImage.childImageSharp.fluid}
            />
          )}
          {post.localFeatureImage && post.localFeatureImage.extension === 'svg'  && (
            <img
              className="mb-4 h-48 w-full object-cover rounded-t"
              src={post.localFeatureImage.publicURL} alt={post.title}
            />
          )}
          {!post.feature_image && (
            <div
              className="flex justify-center items-center bg-blue-500 text-white font-black mb-4 h-48 w-full object-cover rounded-t"
              style={{
                fontSize: "6rem",
              }}
              dangerouslySetInnerHTML={{ __html: post.title[0] }}
            ></div>
          )}

          <div className="px-6">
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                {post.updated_at}
                {post.tags.length > 0 && <span className="mx-2">•</span>}
                <span className="text-gray-600">
                  {post.tags.map((tag, i) => {
                    return (
                      <a
                        onClick={(e) => handleNavigation(e, `tag/${tag.slug}`)}
                        key={i}
                        className="no-underline hover:underline mr-2"
                      >
                        #{tag.name}
                      </a>
                    );
                  })}
                </span>
              </p>
              <h3
                className="text-2xl my-2 font-heading font-semibold tracking-tight leading-tight break-words"
                dangerouslySetInnerHTML={{ __html: post.title }}
              ></h3>
              <p
                className="text-gray-600 font-serif break-words"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              ></p>
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-between px-6">
          <a
            onClick={(e) =>
              handleNavigation(e, `/author/${post.primary_author.slug}`)
            }
            className="text-gray-600 no-underline hover:underline"
          >
            <small>{post.primary_author.name}</small>
          </a>
          {post.readingTime && (
            <small className="text-gray-500">{post.readingTime}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
