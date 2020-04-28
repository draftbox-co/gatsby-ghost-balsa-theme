import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 container mx-auto">
      <div className="flex flex-shrink-0 mr-6">
        <a
          className="text-2xl text-indigo-500 font-semibold font-serif"
          href="/index.html"
        >
          Dunder Mifflin
        </a>
      </div>
      <div className="block lg:hidden">
        {" "}
        <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>{" "}
      </div>
      <div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
        <div className="lg:mx-auto">
          {" "}
          <a
            className="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Home
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Tag
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Author
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-blue-900 hover:text-blue-700"
            href="#"
          >
            Community
          </a>
          <a
            className="block lg:inline-block mt-4 lg:mt-0 lg:mx-5 text-blue-900 hover:text-blue-700"
            href="#"
          >
            News
          </a>
        </div>
        <div>
          <input
            className="block lg:inline-block mt-4 lg:mt-0 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
