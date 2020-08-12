import React from "react";
import { Link, navigate } from "gatsby";
import { GhostPostDescription } from "../models/all-post-description.model";
import Img from "gatsby-image";
import starSVG from "./../images/star.svg";

type PostCardTypes = {
  post: GhostPostDescription;
};

const PostCard: React.FC<PostCardTypes> = ({ post }) => {
  let excerpt = "";

  if (post.excerpt) {
    excerpt =
      post.excerpt.split(" ").length > 30
        ? post.excerpt.split(" ").slice(0, 30).join(" ") + "..."
        : post.excerpt;
  }

  const handleNavigation = (e: any, slug) => {
    e.stopPropagation();
    navigate(slug);
  };
  return (
    <div
      onClick={(e) => handleNavigation(e, `/${post.slug}`)}
      className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 cursor-pointer relative"
    >
      {post.featured && (
        <span
          className="absolute bg-white rounded-full px-2 py-1 text-xs font-sansSemibold z-10 flex items-center"
          style={{ right: "20px", top: "5px" }}
        >
          <span className="mr-1">
            <img src={starSVG} alt="Featured" className="h-3 w-3"></img>
          </span>
          Featured
        </span>
      )}

      <div className="h-full rounded shadow-md flex flex-col justify-between hover:shadow-2xl">
        <div>
          {post.localFeatureImage &&
            post.localFeatureImage.childImageSharp  && (
              <Img
                className="mb-4 h-52 lg:h-48 w-full object-cover rounded-t border-b"
                fluid={post.localFeatureImage.childImageSharp.fluid}
              />
            )}
          {post.localFeatureImage &&
            !post.localFeatureImage.childImageSharp && (
              <img
                className="mb-4 h-52 lg:h-48 w-full object-cover rounded-t border-b"
                src={post.localFeatureImage.publicURL}
                alt={post.title}
              />
            )}
          {!post.feature_image && (
            <div
              className="flex justify-center items-center bg-primary text-white font-sansBold mb-4 h-52 lg:h-48 w-full object-cover rounded-t border-b"
              style={{
                fontSize: "6rem",
              }}
              dangerouslySetInnerHTML={{ __html: post.title[0] }}
            ></div>
          )}

          <div className="px-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600 break-words">
                {post.primary_tag && (
                  <>
                    <span className="text-gray-600">
                      <a
                        onClick={(e) =>
                          handleNavigation(e, `/tag/${post.primary_tag.slug}`)
                        }
                        className="no-underline hover:underline font-sansSemibold text-primary uppercase tracking-wider"
                      >
                        {post.primary_tag.name}
                      </a>
                    </span>
                    <span className="mx-2">•</span>
                  </>
                )}
                {post.readingTime && (
                  <>
                    <span className="text-gray-600">{post.readingTime}</span>
                  </>
                )}
              </p>
              <div className="my-2">
              <Link
                to={`/${post.slug}`}
                className="text-2xl font-sansSemibold tracking-tight leading-tight break-words"
                dangerouslySetInnerHTML={{ __html: post.title }}
              ></Link></div>
              <p
                className="break-words font-serifLight"
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
            className="text-gray-600 no-underline hover:underline text-sm"
          >
            <span>{post.primary_author.name}</span>
          </a>
          <span className="text-gray-600 text-sm">
            {post.published_at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
