import React from "react";
import bigCta from '../images/mobile_login.svg';

const CtaBig = () => {
  return (
    <section className="px-4 py-12 bg-gray-200">
      <div className="flex flex-wrap items-center text-center md:text-left -mx-2">
        <div className="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0 order-1 lg:order-none mx-auto">
          <h2 className="text-4xl mb-6 font-heading">
            Subscribe to Dunder Mifflin
          </h2>
          <form className="w-full max-w-lg mx-auto sm:mx-0">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-4">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-snug text-gray-700 bg-white focus:bg-white border border-white focus:border-gray-500 rounded md:rounded-r-none focus:outline-none"
                  type="text"
                  placeholder="michael@dundermifflin.com"
                />
              </div>
              <div className="w-full md:w-1/3 mb-4">
                <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded md:rounded-l-none">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Get the latest posts delivered right to your inbox.
              </p>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 px-2 mx-auto">
          <img src={bigCta} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CtaBig;
