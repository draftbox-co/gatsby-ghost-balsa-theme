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
import pintrestShare from "../images/pinterest-share.svg";
import whatsappShare from "../images/whatsapp-share.svg";
import CopyLink from "../components/copy-link";
import NextPrevPost from "../components/NextPrevPosts";
import { InView } from "react-intersection-observer";

type PostTemplateProps = {
  data: { ghostPost: GhostPost; prevPost: GhostPost; nextPost: GhostPost };
  location: any;
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data, location }) => {
  const { ghostPost, prevPost, nextPost } = data;

  const [href, sethref] = useState("");

  const [origin, setOrigin] = useState("");

  const [showComments, setshowComments] = useState(false);

  const handleCommentsVisibility = (inView) => {
    if (inView && !showComments) {
      setshowComments(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
      setOrigin(window.location.origin);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/share?text=${ghostPost.title}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${ghostPost.title}`;

  const mailShareUrl = `mailto:?subject=${ghostPost.title}&body=${href}`;

  let pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${href}&description=${data.ghostPost.title}`;
  if (ghostPost.localFeatureImage && ghostPost.localFeatureImage.publicURL) {
    pinterestShareUrl += `&media=${
      origin + ghostPost.localFeatureImage.publicURL
    }`;
  }

  const whatsAppShareUrl = `https://wa.me/?text=${encodeURIComponent(
    ghostPost.title + "\n" + href
  )}`;

  const handleNavigation = (e: any, slug) => {
    e.stopPropagation();
    navigate(slug);
  };

  return (
    <Layout>
      <MetaData data={data} location={location} />
      <div className="spacer my-8 lg:my-12"></div>
      <section className="px-4 max-w-3xl mx-auto">
        <h1
          dangerouslySetInnerHTML={{ __html: ghostPost.title }}
          className="text-4xl lg:text-5xl font-sansSemibold break-words leading-tight"
        ></h1>
        <p className="text-gray-600 break-words my-2 text-sm lg:text-base px-1">
          {ghostPost.published_at}
          {ghostPost.primary_author && (
            <>
              <span className="mx-2">•</span>
              <span>
                <Link
                  className="no-underline hover:underline cursor-pointer"
                  to={`/author/${ghostPost.primary_author.slug}`}
                >
                  {ghostPost.primary_author.name}
                </Link>
              </span>
            </>
          )}
        </p>
      </section>
      <div className="spacer my-8 lg:my-12"></div>
      {ghostPost.localFeatureImage &&
        ghostPost.localFeatureImage.childImageSharp && (
          <section className="px-4 container mx-auto max-w-4xl">
            <Img
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              fluid={ghostPost.localFeatureImage.childImageSharp.fluid}
              alt=""
            />
          </section>
        )}

      {ghostPost.localFeatureImage &&
        ghostPost.localFeatureImage.extension === "svg" && (
          <section className="px-4 container mx-auto max-w-4xl">
            <img
              style={{ maxHeight: "100%" }}
              className="mx-auto"
              src={ghostPost.localFeatureImage.publicURL}
              alt={ghostPost.title}
            />
          </section>
        )}
      <div className="spacer my-8 lg:my-12"></div>
      {ghostPost.childHtmlRehype && ghostPost.childHtmlRehype.html && (
        <div
          dangerouslySetInnerHTML={{ __html: ghostPost.childHtmlRehype.html }}
          className="richtext max-w-3xl px-4 mx-auto font-serifNormal text-gray-800"
        ></div>
      )}

      {ghostPost.tags && ghostPost.tags.length > 0 && (
        <div className="flex items-center max-w-3xl mt-8 mx-auto flex-wrap px-4">
          {ghostPost.tags.map((tag, index) => {
            return (
              <div
                onClick={(e) => handleNavigation(e, `/tag/${tag.slug}`)}
                className="px-3 py-1 rounded-full mr-3 text-gray-700 cursor-pointer hover:text-white hover:bg-primary bg-gray-300 mb-4"
                key={index}
              >
                #{tag.name}
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center max-w-3xl mt-8 mx-auto px-4">
        <span className="mr-2 text-lg text-gray-700">Share:</span>
        <div className="social-icons">
          <ul className="flex">
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={facebookShare} alt="Facebook Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={twitterShare} alt="Twitter Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={linkedInShare} alt="LinkedIn Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
                href={pinterestShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={pintrestShare} alt="LinkedIn Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
                href={whatsAppShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-4" src={whatsappShare} alt="LinkedIn Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-gray-700 hover:bg-primary rounded-full mr-2"
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
      <InView
        as="div"
        onChange={(inView) => handleCommentsVisibility(inView)}
      ></InView>
      <div>
        {process.env.GATSBY_DISQUS_SHORTNAME && showComments && (
          <>
            {/* <hr className="spacer my-8 container mx-auto" /> */}
            <section className="max-w-4xl container mx-auto px-4 mt-16">
              <Disqus slug={ghostPost.slug} title={ghostPost.title} />
            </section>
          </>
        )}
        {process.env.GATSBY_FB_APP_ID && showComments && (
          <>
            {/* <hr className="spacer my-8 container mx-auto" /> */}
            <section className="max-w-4xl container mx-auto px-4 mt-16">
              <FbComments href={href} />
            </section>
          </>
        )}
      </div>
      <div className="spacer my-8 lg:my-12"></div>
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
