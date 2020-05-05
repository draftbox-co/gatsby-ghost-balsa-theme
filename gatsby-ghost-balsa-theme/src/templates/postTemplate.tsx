import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GhostPostDescription } from "../models/post-description.model";
import CtaMini from "../components/CtaMini";
import Img from "gatsby-image";
import { MetaData } from "../components/meta";
import Disqus from "../components/disqus";
import "../styles/richtext.css";
import facebookShare from "../images/facebook-share.svg";
import twitterShare from "../images/twitter-share.svg";
import linkedInShare from "../images/linkedin.svg";
import mailShare from "../images/mail.svg";

type PostTemplateProps = {
  data: GhostPostDescription;
  location: any;
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data, location }) => {
  const { ghostPost } = data;

  const twitterShareUrl = `https://twitter.com/share?text=${ghostPost.title}&url=${location.href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&amp;url=${location.href}/&amp;title=${ghostPost.title}`;

  const mailShareUrl = `mailto:?subject=${ghostPost.title}&amp;body=${location.href}`;

  return (
    <Layout>
      <MetaData data={data} location={location} />
      <div className="spacer my-6"></div>
      <section className="px-4 max-w-4xl mx-auto">
        <h1 className=" text-4xl text-center font-heading font-semibold">
          {ghostPost.title}
        </h1>
        <p className="text-center">
          <span>{ghostPost.updated_at}, by </span>
          <Link
            className="ml-1 text-blue-700 hover:underline"
            to={`/author/${ghostPost.primary_author.slug}`}
          >
            {ghostPost.primary_author.name}
          </Link>
        </p>
      </section>
      <div className="spacer my-6"></div>
      {ghostPost.localFeatureImage && (
        <section className="px-4 container mx-auto">
          <Img
            style={{ maxHeight: "60vh" }}
            fluid={ghostPost.localFeatureImage.childImageSharp.fluid}
            alt=""
          />
        </section>
      )}
      <div className="spacer my-6"></div>
      <div
        dangerouslySetInnerHTML={{ __html: ghostPost.childHtmlRehype.html }}
        className="richtext max-w-3xl mx-4 lg:mx-auto font-serif text-gray-800"
      ></div>
      <div className="flex items-center max-w-3xl mt-8 mx-4 lg:mx-auto">
        <span className="mr-2 text-lg text-gray-700">Share:</span>
        <div className="social-icons">
          <ul className="flex">
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={facebookShareUrl}
                target="_blank"
                rel="norefferer noopener"
              >
                <img className="h-4" src={facebookShare} alt="Facebook Share" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={twitterShareUrl}
                target="_blank"
                rel="norefferer noopener"
              >
                <img className="h-4" src={twitterShare} alt="" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={linkedInShareUrl}
                target="_blank"
                rel="norefferer noopener"
              >
                <img className="h-4" src={linkedInShare} alt="" />
              </a>
            </li>
            <li>
              <a
                className="block p-2 bg-blue-500 hover:bg-blue-700 rounded-full mr-2"
                href={mailShareUrl}
                target="_blank"
                rel="norefferer noopener"
              >
                <img className="h-4" src={mailShare} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="spacer my-8 container mx-auto" />
      <section className="max-w-3xl container mx-auto">
        <Disqus slug={ghostPost.slug} title={ghostPost.title} />
      </section>
      <div className="spacer my-8"></div>
      <CtaMini />
    </Layout>
  );
};

export const postDataQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostDetails
    }
  }
`;

export default PostTemplate;
