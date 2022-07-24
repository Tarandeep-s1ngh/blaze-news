import { Link } from "react-router-dom";
import { logoname } from "../assets";
import { Navbar, Headlines, FullContent } from "../components";

export const Home = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/********** Header & Nav ***********/}
        <div className="pt-4 px-2 bg-bgmain md:flex md:justify-evenly md:items-start md:gap-4 min-h-screen">
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

            <Navbar />
          </section>

          {/********** Main **********/}
          <section className="mt-12 md:my-3 flex flex-col items-center justify-center md:max-w-xl">
            <Headlines />
            {/* <FullContent /> */}
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
          <li>
            <span className="drawer-item-b">Favorites</span>
          </li>
          <li>
            <span className="drawer-item-b">All Sources</span>
          </li>
          <li>
            <span className="drawer-item-b">Sources</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
