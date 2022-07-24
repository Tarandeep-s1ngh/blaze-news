import React from "react";
import { FeedCard } from "./FeedCard";

export const Headlines = () => {
  return (
    <section className="md:h-[calc(100vh-2.5rem)] md:overflow-y-auto">
      <h2 className="font-heading font-semibold text-lg text-center underline">
        All Sources
      </h2>

      {/* <div className="tabs tabs-boxed mb-2 text-sm rounded-md shadow-md bg-slate-50 font-medium [&>.tab-active]:bg-accent [&>.active]:bg-slate-50 [&>button]:text-slate-400 [&>button]:px-3">
              <button className="tab tab-active">
                <i className="fa-solid fa-fire mr-1"></i> Trending
              </button>
              <button className="tab">
                <i className="fa-solid fa-sort mr-1"></i> Latest Posts
              </button>
            </div> */}
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      {/* {posts.map((post) => {
          return <FeedCard post={post} key={post._id} />;
        })} */}
    </section>
  );
};
