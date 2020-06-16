import React from "react";
import { GhostPost } from "../models/post-description.model";

type NextPrevPostProps = {
  prevPost: GhostPost;
  nextPost: GhostPost;
};
const NextPrevPost: React.FC<NextPrevPostProps> = ({ prevPost, nextPost }) => {
  return (
    <>
      <aside className="px-4 max-w-4xl mx-auto flex mt-10">
        {nextPost && (
          <a className="w-1/2 px-4 relative" href={nextPost.slug}>
            <section className="post-nav-teaser">
              <i className="icon icon-arrow-left"></i>
              <h2 className="text-xl font-bold mb-2 text-gray-800">{nextPost.title}</h2>
              <p className="mb-2">{nextPost.excerpt}&hellip;</p>
              <p className="text-gray-600 text-xs uppercase absolute bottom-0">
                <time dateTime="{{date format='DD-MM-YYYY'}}">
                  {nextPost.published_at}
                </time>
              </p>
            </section>
          </a>
        )}

        {prevPost && (
          <a className="w-1/2 px-4 relative" href={prevPost.slug}>
            <section className="post-nav-teaser">
              <i className="icon icon-arrow-right"></i>
              <h2 className="text-xl font-bold mb-2 text-gray-800">{prevPost.title}</h2>
              <p className="mb-2">{prevPost.excerpt}&hellip;</p>
              <p className="text-gray-600 text-xs uppercase absolute bottom-0">
                <time dateTime="{{date format='DD-MM-YYYY'}}">
                  {prevPost.published_at}
                </time>
              </p>
            </section>
          </a>
        )}

        <div className="clear"></div>
      </aside>
    </>
  );
};

export default NextPrevPost;
