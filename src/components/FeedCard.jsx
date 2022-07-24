import React from "react";
import { logo } from "../assets";

export const FeedCard = () => {
  // console.log(post);
  // const getPostDateTime = (updatedAt) => {
  //   const date = new Date(updatedAt).getDate();
  //   const month = new Date(updatedAt).getMonth();
  //   const year = new Date(updatedAt).getFullYear();
  //   const hours = new Date(updatedAt).getHours();
  //   const minutes = new Date(updatedAt).getMinutes();
  //   return `${date}/${month}/${year} ${hours}:${minutes}`;
  // };
  return (
    <div className="flex flex-col justify-center max-h-24 md:max-h-40 bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1">
        <div className="avatar">
          <div className="w-12 rounded hover:cursor-pointer">
            <img src={logo} alt="dp" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="font-medium hover:cursor-pointer">
            Headline Lorem ipsum dolor sit amet consectetur adipisicing.
          </span>
          <small className="text-slate-400 select-none">
            09:40 25/07/2022
            {/* {getPostDateTime(post.updatedAt)} */}
          </small>
        </div>
        <i className="fa-regular fa-star ml-auto hover:cursor-pointer  hover:text-accent"></i>
      </section>
    </div>
  );
};
