import React from "react";
import { useNews } from "../context/news-context";
import { FeedCard } from "./FeedCard";

export const Headlines = ({ articles }) => {
  const { newsState } = useNews();

  return (
    <section className="md:h-[calc(100vh-2.5rem)] md:overflow-y-auto">
      {newsState.favToggle ? (
        <></>
      ) : (
        <h2 className="font-heading font-semibold text-lg text-center underline">
          {newsState.sourceName}
        </h2>
      )}

      {articles.length > 0 ? (
        articles?.map((article, index) => {
          return <FeedCard article={article} key={index} />;
        })
      ) : (
        <h2 className="font-semibold text-lg text-center mt-2">
          No Favorites Selected
        </h2>
      )}
    </section>
  );
};
