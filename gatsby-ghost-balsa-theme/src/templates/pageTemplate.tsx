import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { MetaData } from "../components/meta";
import { graphql, navigate } from "gatsby";
import { GhostPage } from "../models/page-description.model";
import Img from "gatsby-image";
import CtaMini from "../components/CtaMini";
import "../styles/richtext.css";
import "../styles/prism.css";

import facebookShare from "../images/facebook-share.svg";
import twitterShare from "../images/twitter-share.svg";
import linkedInShare from "../images/linkedin-share.svg";
import mailShare from "../images/mail.svg";
import CopyLink from "../components/copy-link";

type IndexPageProps = {
  data: {
    ghostPage: GhostPage;
  };
  location: any;
};

const PageTemplate: React.FC<IndexPageProps> = ({ data, location }) => {
  const { ghostPage } = data;

  const [href, sethref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/share?text=${ghostPage.title}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${ghostPage.title}`;

  const mailShareUrl = `mailto:?subject=${ghostPage.title}&body=${href}`;

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
          dangerouslySetInnerHTML={{ __html: ghostPage.title }}
          className=" text-5xl text-center font-heading font-medium break-words"
        ></h1>
      </section>
      <div className="spacer my-6"></div>
      {ghostPage.localFeatureImage &&
        ghostPage.localFeatureImage.childImageSharp && (
          <section className="px-4 container mx-auto">
            <Img
              style={{ maxHeight: "60vh", maxWidth: '100%' }}
              fluid={ghostPage.localFeatureImage.childImageSharp.fluid}
              alt={ghostPage.title}
            />
          </section>
        )}
      {ghostPage.localFeatureImage &&
        ghostPage.localFeatureImage.extension === "svg" && (
          <section className="px-4 container mx-auto">
            <img
              style={{ maxHeight: "60vh" }}
              className="mx-auto"
              src={ghostPage.localFeatureImage.publicURL}
              alt={ghostPage.title}
            />
          </section>
        )}
      <div className="spacer my-6"></div>
      {ghostPage.childHtmlRehype && ghostPage.childHtmlRehype.html && <div
        dangerouslySetInnerHTML={{ __html: ghostPage.childHtmlRehype.html }}
        className="richtext max-w-3xl px-4 mx-auto font-serif text-gray-800"
      ></div>}

      <div className="flex items-center max-w-3xl mt-8 lg:mx-auto px-4">
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
      
      <div className="spacer my-6"></div>
      <CtaMini />
    </Layout>
  );
};

export default PageTemplate;

export const PageTemplateQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageDetails
    }
  }
`;
