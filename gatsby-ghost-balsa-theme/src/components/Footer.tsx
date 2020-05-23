import React from "react";
import { SettingsAndSlugs } from "../models/settings-and-page-slugs.model";
import { Link } from "gatsby";
import rssLogo from "../images/rss.svg";
import facebookLogo from "../images/facebook.svg";
import twitterLogo from "../images/twitter.svg";

type FooterProps = {
  footerData: SettingsAndSlugs;
};

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const {
    ghostSettings: { title, navigation, facebook, twitter },
    site: {
      siteMetadata: { siteUrl },
    },
  } = footerData;
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-wrap items-center py-4 px-4 border-b container mx-auto">
        <div className="w-full lg:w-1/5 text-center lg:text-left">
          <span className="block md:inline-block md:mb-0">
            {title} © {new Date().getFullYear()}
          </span>
        </div>
        <div className="w-full lg:w-3/5 mt-4 lg:mt-0 text-center">
          <Link
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            to="/"
          >
            Home
          </Link>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="/sitemap.xml"
          >
            Sitemap
          </a>
          <a
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            href="/rss"
          >
            RSS
          </a>
          <Link
            className="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* social Icons */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0">
          {facebook && (
            <a rel="noreferrer noopener" href={`https://facebook.com/${facebook}`} target="_blank">
              <img
                className="w-4 h-4 mr-4"
                src={facebookLogo}
                alt="Facebook Logo"
              />
            </a>
          )}

          {twitter && (
            <a rel="noreferrer noopener" href={`https://twitter.com/${twitter}`} target="_blank">
              <img
                className="w-4 h-4 mr-4"
                src={twitterLogo}
                alt="Twitter Logo"
              />
            </a>
          )}
        </div>
      </div>
      <div className="py-4 flex flex-col items-center justify-center">
        <a
          className="text-blue-500 uppercase"
          href="https://draftbox.co?ref=preview"
          rel="noreferrer noopener"
          target="_blank"
        >
          Published with DraftBox
        </a>
      </div>
    </footer>
  );
};

export default Footer;
