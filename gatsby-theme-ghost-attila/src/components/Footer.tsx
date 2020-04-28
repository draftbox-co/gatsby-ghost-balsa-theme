import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-wrap items-center py-4 px-4 border-b container mx-auto">
        <div className="w-full lg:w-1/5 text-center lg:text-left">
          <a className="text-xl text-indigo-500 font-semibold" href="#">
            Dunder Mifflin
          </a>
        </div>
        <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Home
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Tag
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Author
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Community
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="#"
          >
            News
          </a>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
          <img
            className="w-6 h-6"
            src="placeholders/icons/message.svg"
            alt=""
          />
          <img
            className="w-6 h-6 mx-8"
            src="placeholders/icons/share.svg"
            alt=""
          />
          <img className="w-6 h-6" src="placeholders/icons/star.svg" alt="" />
        </div>
      </div>
      <div className="py-4 text-center">
        <span className="block md:inline-block mb-4 md:mb-0 mx-3">
          © 2020 Dunder Mifflin
        </span>
      </div>
    </footer>
  );
};

export default Footer;
