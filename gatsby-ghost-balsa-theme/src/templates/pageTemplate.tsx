import React from "react";
import Layout from "../components/Layout";
import { MetaData } from "../components/meta";
import { graphql } from "gatsby";
import { GhostPage } from "../models/page-description.model";
import Img from "gatsby-image";
import CtaMini from "../components/CtaMini";
import "../styles/richtext.css";
import "../styles/prism.css";

type IndexPageProps = {
  data: {
    ghostPage: GhostPage;
  };
  location: any;
};

const PageTemplate: React.FC<IndexPageProps> = ({ data, location }) => {
  const { ghostPage } = data;
  return (
    <Layout>
      <MetaData data={data} location={location} />
      <div className="spacer my-6"></div>
      <section className="px-4 max-w-4xl mx-auto">
        <h1
          dangerouslySetInnerHTML={{ __html: ghostPage.title }}
          className=" text-4xl text-center font-heading font-semibold break-words"
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
        className="richtext max-w-3xl mx-4 lg:mx-auto font-serif text-gray-800"
      ></div>}
      
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
