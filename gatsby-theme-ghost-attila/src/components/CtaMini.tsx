import React from "react";

const CtaMini = () => {
  return (
    <section className="px-4 py-12 bg-gray-200">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h2 className="text-5xl mt-4 mb-8 leading-tight font-heading">
          Subscribe to Dunder Mifflin
        </h2>
        <form className="w-full max-w-xl mx-auto">
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-2/3 mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-snug text-gray-700 bg-white focus:bg-white border border-white focus:border-gray-500 rounded md:rounded-r-none focus:outline-none"
                type="text"
                placeholder="michael@dundermifflin.com"
              />
            </div>
            <div className="w-full md:w-1/3">
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded md:rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Get the latest posts delivered right to your inbox.
          </p>
        </form>
      </div>
    </section>
  );
};

export default CtaMini;
