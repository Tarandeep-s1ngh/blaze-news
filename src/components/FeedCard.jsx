import React, { useEffect } from "react";
import { useNews } from "../context/news-context";
import {
  ADD_TO_FAVORITES,
  FULL_CONTENT_TOGGLE,
  isInFavorites,
  REMOVE_FROM_FAVORITES,
  triggerToast,
  UPDATE_DETAILED_VIEW,
  UPDATE_SOURCE_NAME,
} from "../utils";

export const FeedCard = ({ article }) => {
  const getPostDateTime = (day) => {
    const date = new Date(day).getDate();
    const month = new Date(day).getMonth();
    const year = new Date(day).getFullYear();
    const hours = new Date(day).getHours();
    const minutes = new Date(day).getMinutes();
    return `${date}/${month}/${year} ${hours}:${minutes}`;
  };

  const { newsState, newsDispatch } = useNews();

  useEffect(() => {
    newsDispatch({
      type: UPDATE_DETAILED_VIEW,
      payload: {
        image: article.urlToImage,
        title: article.title,
        content: article.content,
      },
    });
    newsDispatch({
      type: UPDATE_SOURCE_NAME,
      payload: article.source?.name,
    });
  }, [
    newsDispatch,
    article.urlToImage,
    article.title,
    article.content,
    article?.source?.name,
  ]);

  const detailViewHandler = (img, tl, cont) => {
    newsDispatch({
      type: UPDATE_DETAILED_VIEW,
      payload: {
        image: img,
        title: tl,
        content: cont,
      },
    });

    newsDispatch({
      type: FULL_CONTENT_TOGGLE,
    });
  };

  const favoriteFlag = isInFavorites(newsState, article);

  return (
    <div
      key={article.title}
      onClick={() => {
        detailViewHandler(article.urlToImage, article.title, article.content);
      }}
      className="flex flex-col justify-center max-h-24 md:max-h-40 bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2 hover:bg-gray-100 hover:cursor-pointer"
    >
      <section className="flex [&>*]:px-1">
        <div className="avatar">
          <div className="w-12 rounded hover:cursor-pointer">
            <img src={article.urlToImage} alt="related to news" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="font-medium">{article.title}</span>
          <small className="text-slate-400 select-none">
            {getPostDateTime(article.publishedAt)}
          </small>
        </div>

        {favoriteFlag ? (
          <i
            onClick={(e) => {
              e.stopPropagation();
              newsDispatch({
                type: REMOVE_FROM_FAVORITES,
                payload: article.title,
              });
              triggerToast("warning", "Removed from favorites");
            }}
            className="fa-solid fa-star ml-auto hover:cursor-pointer text-accent hover:text-accent"
          ></i>
        ) : (
          <i
            onClick={(e) => {
              e.stopPropagation();
              newsDispatch({
                type: ADD_TO_FAVORITES,
                payload: article,
              });
              triggerToast("success", "Added to favorites");
            }}
            className="fa-regular fa-star ml-auto hover:cursor-pointer  hover:text-accent"
          ></i>
        )}
      </section>
    </div>
  );
};
