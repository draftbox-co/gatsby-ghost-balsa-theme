import React from "react";
import Layout from "../components/Layout";
import "../styles/richtext.css";
import CtaMini from "../components/CtaMini";
import Footer from "../components/Footer";

const Post = () => {
  return (
    <Layout>
      <div className="spacer my-6"></div>
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
      <div className="spacer my-6"></div>
      <section className="px-4 container mx-auto">
        <img
          className="object-cover w-full"
          style={{ maxHeight: "60vh" }}
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
          alt=""
        />
      </section>
      <div className="spacer my-6"></div>
      <div className="richtext max-w-3xl mx-4 lg:mx-auto font-serif text-gray-800">
        <h1>Hola Bois Hola</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          provident eveniet ut, quas reprehenderit adipisci animi suscipit quasi
          asperiores nihil commodi qui temporibus minus vero, expedita cum
          explicabo natus minima.
        </p>
      </div>
      <div className="spacer my-8"></div>
      <CtaMini />
      <Footer />
    </Layout>
  );
};

export default Post;
