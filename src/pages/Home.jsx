import { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoname } from "../assets";
import { Navbar, Headlines, FullContent } from "../components";
import { useNews } from "../context/news-context";
import {
  FAV_TOGGLE,
  getNews,
  getSources,
  UPDATE_ALL_NEWS,
  UPDATE_SOURCES,
  UPDATE_SOURCE_NEWS,
} from "../utils";

export const Home = () => {
  const { newsState, newsDispatch } = useNews();

  useEffect(() => {
    (async () => {
      const res = await getSources();
      newsDispatch({
        type: UPDATE_SOURCES,
        payload: res,
      });
    })();
  }, [newsDispatch]);

  useEffect(() => {
    (async () => {
      const res = await getNews("top-headlines?country=in&", newsDispatch);
      newsDispatch({
        type: UPDATE_ALL_NEWS,
        payload: res,
      });
    })();
  }, [newsDispatch]);

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
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/********** Header & Nav ***********/}
        <div className="pt-4 md:pt-1 px-2 md:px-4 bg-bgmain md:flex md:justify-evenly md:items-start md:gap-4 min-h-screen">
          <section className="flex flex-col md:bg-slate-50">
            <div className="bg-slate-50 fixed top-0 left-0 w-full py-2 flex justify-center z-10 md:static md:bg-bgmain hover:cursor-pointer">
              <label
                htmlFor="my-drawer"
                className="md:hidden absolute left-4 top-5 text-secondary"
              >
                <i className="fa-solid fa-bars fa-lg md:hidden"></i>
              </label>
              <Link to="/">
                <img src={logoname} alt="logo" width="200px" />
              </Link>
            </div>

            <Navbar sourcesList={newsState.sources} />
          </section>

          {/********** Main **********/}
          <section className="mt-12 md:my-3 flex flex-col items-center justify-center md:max-w-xl md:min-w-[608px]">
            {newsState.FullContentToggle ? (
              <div className="md:hidden">
                <FullContent />
              </div>
            ) : (
              <div className="md:hidden">
                {newsState.favToggle ? (
                  <Headlines articles={newsState.favorites} />
                ) : (
                  <Headlines articles={newsState.allNews} />
                )}
              </div>
            )}
            <div className="hidden md:block">
              {newsState.favToggle ? (
                <Headlines articles={newsState.favorites} />
              ) : (
                <Headlines articles={newsState.allNews} />
              )}
            </div>
          </section>

          {/********** Full Content Section **********/}
          <section className="hidden md:block">
            <FullContent />
          </section>
        </div>
      </div>
      {/********** Drawer Items **********/}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-3/4 bg-[#db6802] text-slate-50 font-semibold [&>li>.drawer-item-b]:block [&>li>.drawer-item-b]:border-b-2 [&>li>.drawer-item-b]:border-slate-200 [&>li>.drawer-item-b]:bg-[#db6802] [&>li>.drawer-item-b]:rounded-none">
          <li
            onClick={() => {
              newsDispatch({ type: FAV_TOGGLE });
            }}
          >
            <span className="drawer-item-b">Favorites</span>
          </li>
          <li onClick={allNewsHandler}>
            <span className="drawer-item-b">All Sources</span>
          </li>
          <div className="overflow-y-auto hide-scroll">
            {newsState.sources?.map(({ id, name }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    sourceNewsHandler(id);
                  }}
                >
                  <span className="drawer-item-b">{name}</span>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};
