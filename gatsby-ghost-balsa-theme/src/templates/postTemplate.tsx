import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { graphql, Link, navigate } from "gatsby";
import {
  GhostPostDescription,
  GhostPost,
} from "../models/post-description.model";
import CtaMini from "../components/CtaMini";
import Img from "gatsby-image";
import { MetaData } from "../components/meta";
import Disqus from "../components/disqus";
import FbComments from "../components/fb-comments";
import "../styles/richtext.css";
import "../styles/prism.css";
import facebookShare from "../images/facebook-share.svg";
import twitterShare from "../images/twitter-share.svg";
import linkedInShare from "../images/linkedin-share.svg";
import mailShare from "../images/mail.svg";
import CopyLink from "../components/copy-link";
import NextPrevPost from "../components/NextPrevPosts";

type PostTemplateProps = {
  data: { ghostPost: GhostPost; prevPost: GhostPost; nextPost: GhostPost };
  location: any;
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data, location }) => {
  const { ghostPost, prevPost, nextPost } = data;

  const [href, sethref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/share?text=${ghostPost.title}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${ghostPost.title}`;

  const mailShareUrl = `mailto:?subject=${ghostPost.title}&body=${href}`;

  const handleNavigation = (e: any, slug) => {
    e.stopPropagation();
    navigate(slug);
  };

  return (
    <Layout>
      <MetaData data={data} location={location} />
      <div className="spacer my-6"></div>
      <section className="px-4 max-w-4xl mx-auto">
        <h1
          dangerouslySetInnerHTML={{ __html: ghostPost.title }}
          className="text-5xl text-center font-heading font-medium break-words"
        ></h1>
        <p className="text-center mt-3">
          <span>{ghostPost.published_at}</span><strong className="mx-2">&bull;</strong>
          <Link
            className="text-blue-700 hover:underline"
            to={`/author/${ghostPost.primary_author.slug}`}
          >
            {ghostPost.primary_author.name}
          </Link>
        </p>
      </section>
      <div className="spacer my-6"></div>
      {ghostPost.localFeatureImage &&
        ghostPost.localFeatureImage.childImageSharp && (
          <section className="px-4 container mx-auto">
            <Img
              style={{ maxHeight: "60vh", maxWidth: "100%" }}
              fluid={ghostPost.localFeatureImage.childImageSharp.fluid}
              alt=""
            />
          </section>
        )}

      {ghostPost.localFeatureImage &&
        ghostPost.localFeatureImage.extension === "svg" && (
          <section className="px-4 container mx-auto">
            <img
              style={{ maxHeight: "60vh" }}
              className="mx-auto"
              src={ghostPost.localFeatureImage.publicURL}
              alt={ghostPost.title}
            />
          </section>
        )}
      <div className="spacer my-6"></div>
      {ghostPost.childHtmlRehype && ghostPost.childHtmlRehype.html && (
        <div
          dangerouslySetInnerHTML={{ __html: ghostPost.childHtmlRehype.html }}
          className="richtext max-w-3xl px-4 mx-auto font-serif text-gray-800"
        ></div>
      )}

      {ghostPost.tags && ghostPost.tags.length > 0 && (
        <div className="flex items-center max-w-3xl mt-8 mx-4 lg:mx-auto flex-wrap px-4">
          {ghostPost.tags.map((tag, index) => {
            return (
              <div
                onClick={(e) => handleNavigation(e, `tag/${tag.slug}`)}
                className="px-3 py-1 rounded-full mr-3 text-gray-700 cursor-pointer hover:text-white hover:border-gray-700 hover:bg-gray-700 bg-gray-300 mb-4"
                key={index}
              >
                #{tag.name}
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center max-w-3xl mt-8 mx-4 lg:mx-auto px-4">
        <span className="mr-2 text-lg text-gray-700">Share:</span>
        <div className="social-icons">
          <ul className="flex">
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={facebookShare} alt="Facebook Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={twitterShare} alt="Twitter Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={linkedInShare} alt="LinkedIn Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={mailShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={mailShare} alt="Email Share" />
              </a>
            </li>
            <li>
              <CopyLink textToCopy={href} />
            </li>
          </ul>
        </div>
      </div>
      <NextPrevPost prevPost={prevPost} nextPost={nextPost} />
      {process.env.GATSBY_DISQUS_SHORTNAME && (
        <>
          {/* <hr className="spacer my-8 container mx-auto" /> */}
          <section className="max-w-4xl container mx-auto px-4 mt-16">
            <Disqus slug={ghostPost.slug} title={ghostPost.title} />
          </section>
        </>
      )}
      {process.env.GATSBY_FB_APP_ID && (
        <>
          {/* <hr className="spacer my-8 container mx-auto" /> */}
          <section className="max-w-4xl container mx-auto px-4 mt-16">
            <FbComments href={href} />
          </section>
          )
        </>
      )}
      <div className="spacer my-8"></div>
      <CtaMini />
    </Layout>
  );
};

export const postDataQuery = graphql`
  query($slug: String!, $prev: String, $next: String) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostDetails
    }
    prevPost: ghostPost(slug: { eq: $prev }) {
      title
      excerpt
      slug
      updated_at(formatString: "MMMM DD YYYY")
      published_at(formatString: "MMMM DD YYYY")
    }
    nextPost: ghostPost(slug: { eq: $next }) {
      title
      excerpt
      slug
      updated_at(formatString: "MMMM DD YYYY")
      published_at(formatString: "MMMM DD YYYY")
    }
  }
`;

export default PostTemplate;
