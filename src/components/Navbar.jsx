import React from "react";
import { useNews } from "../context/news-context";
import {
  FAV_TOGGLE,
  getNews,
  UPDATE_ALL_NEWS,
  UPDATE_SOURCE_NEWS,
} from "../utils";

export const Navbar = ({ sourcesList }) => {
  const { newsDispatch } = useNews();

  const sourceNewsHandler = (id) => {
    (async () => {
      const res = await getNews(`top-headlines?sources=${id}&`, newsDispatch);
      newsDispatch({
        type: UPDATE_SOURCE_NEWS,
        payload: res,
      });
    })();
  };

  const allNewsHandler = () => {
    (async () => {
      const res = await getNews("top-headlines?country=in&", newsDispatch);
      newsDispatch({
        type: UPDATE_ALL_NEWS,
        payload: res,
      });
    })();
  };

  return (
    <nav className="hidden h-full w-full bg-bgmain pt-4 md:flex flex-col justify-start gap-2 text-slate-600 text-sm font-semibold [&>*]:p-2 [&>*]:w-full [&>*]:rounded-md [&>*]:hover:cursor-pointer [&>.active]:bg-slate-50 [&>.active]:text-accent">
      <button
        onClick={() => {
          newsDispatch({ type: FAV_TOGGLE });
        }}
        className="bg-accent text-slate-50 rounded-md py-1 hover:bg-primary"
      >
        Favorites
      </button>
      <button
        onClick={allNewsHandler}
        className="flex gap-2 items-center hover:bg-slate-50 focus:bg-slate-50 focus:text-accent"
      >
        <span className="ml-2 text-base">All Sources</span>
      </button>
      <div className="h-[calc(100vh-11rem)] pb-4 overflow-y-auto hide-scroll [&>*]:p-2 [&>*]:w-full [&>*]:rounded-md [&>*]:hover:cursor-pointer [&>.active]:bg-slate-50 [&>.active]:text-accent">
        {sourcesList?.map(({ id, name }) => {
          return (
            <button
              key={id}
              onClick={() => {
                sourceNewsHandler(id);
              }}
              className="flex gap-2 items-center hover:bg-slate-50 text-left focus:bg-slate-50 focus:text-accent"
            >
              <span>{name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
