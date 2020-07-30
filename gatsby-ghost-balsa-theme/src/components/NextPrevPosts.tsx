import React from "react";
import { GhostPost } from "../models/post-description.model";
import classNames from "classnames";

type NextPrevPostProps = {
  prevPost: GhostPost;
  nextPost: GhostPost;
};
const NextPrevPost: React.FC<NextPrevPostProps> = ({ prevPost, nextPost }) => {
  return (
    <>
      <aside className="px-4 max-w-4xl mx-auto flex flex-wrap mt-10">
        <a
          className={classNames(
            "w-full md:w-1/2 px-4 relative py-4 border-t border-b",
            {
              "pointer-events-none hidden md:block": !nextPost,
              "py-4": nextPost,
            }
          )}
          href={nextPost?.slug ? `/${nextPost.slug}` : "#"}
        >
          {nextPost && (
            <section className="h-full flex flex-col">
              <i className="icon icon-arrow-left"></i>
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {nextPost.title}
              </h2>
              <p className="mb-2 prev-next-post text-gray-600 font-serifLight break-words">
                {nextPost.excerpt}&hellip;
              </p>
              <p className="text-gray-600 text-xs mt-auto">
                <time dateTime="{{date format='DD-MM-YYYY'}}">
                  {nextPost.published_at}
                </time>
              </p>
            </section>
          )}
        </a>

        <a
          className={classNames(
            "w-full md:w-1/2 px-4 relative md:border-l md:border-t border-b",
            {
              "pointer-events-none hidden md:block": !prevPost,
              "py-4": prevPost,
              "border-t": !nextPost,
            }
          )}
          href={prevPost?.slug ? `/${prevPost.slug}` : "#"}
        >
          {prevPost && (
            <section className="h-full flex flex-col">
              <i className="icon icon-arrow-right"></i>
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {prevPost.title}
              </h2>
              <p className="mb-2 prev-next-post text-gray-600 font-serifLight break-words">
                {prevPost.excerpt}&hellip;
              </p>
              <p className="text-gray-600 text-xs mt-auto">
                <time dateTime="{{date format='DD-MM-YYYY'}}">
                  {prevPost.published_at}
                </time>
              </p>
            </section>
          )}
        </a>
      </aside>
    </>
  );
};

export default NextPrevPost;
