import React from "react";
import Layout from "../components/Layout";

const PostTemplate = () => {
  return (
    <Layout>
      <section className="px-4 container mx-auto">
        <h1 className="text-4xl text-center font-heading font-semibold">
          The Official Dunder Mifflin Scranton Diary
        </h1>
        <p className="text-center">
          <span>October 22, by</span>
          <a className="ml-1 text-blue-700 hover:underline" href="#">
            Michael Scott
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default PostTemplate;
