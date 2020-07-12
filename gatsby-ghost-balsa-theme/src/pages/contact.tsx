import React from "react";
import ContactForm from "../components/ContactForm";
import MetaData from "../components/meta/MetaData";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

const Contact = ({ location }) => {
  const {
    site: {
      siteMetadata: { contactWidget },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactWidget {
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <MetaData title={contactWidget.title} location={location} />

      <ContactForm />
    </Layout>
  );
};

export default Contact;
