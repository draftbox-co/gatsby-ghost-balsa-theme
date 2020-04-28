import React from "react";
import Layout from "../components/Layout";
import CtaBig from "../components/CtaBig";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <section className="text-center bg-cover">
          <div className="relative flex items-center py-32">
            <div className="absolute bg-black opacity-50 inset-0" />
            <div className="z-10 max-w-2xl mx-auto px-4">
              <h1 className="mb-4 text-4xl leading-tight font-semibold font-heading text-white">
                The Dunder Mifflin Blog
              </h1>
              <p className="text-2xl leading-tight font-light text-white">
                The official voice of Dunder Mifflin branch in Scranton. It's a
                place for us to talk about news, product, community, businesses
                and more at Dunder Mifflin.
              </p>
            </div>
          </div>
        </section>
        <div className="spacer my-8"></div>
        <section className="px-4 container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 cursor-pointer">
              <div className="h-full rounded shadow-md flex flex-col justify-between">
                <div>
                  <img
                    className="mb-4 rounded-t"
                    src="placeholders/pictures/work.jpg"
                    alt="Workplace"
                  />
                  <div className="px-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">
                        22 Oct 2019<span className="mx-2">•</span>
                        <span className="text-gray-600">
                          <a
                            className="no-underline hover:underline"
                            href="/tag.html"
                          >
                            #News
                          </a>
                          <span className="mr-2">,</span>
                          <a
                            className="no-underline hover:underline"
                            href="/tag.html"
                          >
                            #Community
                          </a>
                        </span>
                      </p>
                      <h3 className="text-2xl my-2 font-heading font-semibold tracking-tight leading-tight">
                        Being world’s best boss
                      </h3>
                      <p className="text-gray-600 font-serif">
                        The wise man once said: "Friend first, boss second,
                        entertainer third". That man was me.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex justify-between px-6">
                  <a
                    className="text-gray-600 no-underline hover:underline"
                    href="/author.html"
                  >
                    <small>Michael Scott</small>
                  </a>
                  <small className="text-gray-500">3 min read</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CtaBig />
      </Layout>
    </div>
  );
};

export default IndexPage;
