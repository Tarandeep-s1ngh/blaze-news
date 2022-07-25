import React from "react";
import { useNews } from "../context/news-context";
import {
  ADD_TO_FAVORITES,
  FULL_CONTENT_TOGGLE,
  isInFavorites,
  REMOVE_FROM_FAVORITES,
  triggerToast,
} from "../utils";

export const FullContent = () => {
  const { newsState, newsDispatch } = useNews();

  const { detailedView } = newsState;

  const favoriteFlag = isInFavorites(newsState, detailedView);

  return (
    <section className="flex flex-col gap-2 max-w-2xl md:pt-3 md:h-[calc(100vh-2rem)] md:overflow-y-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <i
            onClick={() => {
              newsDispatch({ type: FULL_CONTENT_TOGGLE });
            }}
            className="fa-solid fa-circle-chevron-left fa-lg md:hidden"
          ></i>
          <h1 className="font-heading text-lg font-semibold">
            {detailedView.title}
          </h1>
        </div>
        {favoriteFlag ? (
          <i
            onClick={() => {
              newsDispatch({
                type: REMOVE_FROM_FAVORITES,
                payload: detailedView.title,
              });
              triggerToast("error", "Removed from favorites");
            }}
            className="fa-solid fa-star ml-auto hover:cursor-pointer text-accent hover:text-accent"
          ></i>
        ) : (
          <i
            onClick={() => {
              newsDispatch({
                type: ADD_TO_FAVORITES,
                payload: detailedView,
              });
              triggerToast("success", "Added to favorites");
            }}
            className="fa-regular fa-star ml-auto hover:cursor-pointer  hover:text-accent"
          ></i>
        )}
      </div>
      <div>
        <img
          src={detailedView.image}
          alt="related to news"
          className="max-w-full h-auto object-cover object-center"
        />
      </div>
      <p className="text-justify">{detailedView.content}</p>
    </section>
  );
};
