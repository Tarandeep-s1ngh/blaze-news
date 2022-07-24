import React from "react";

export const FeedCard = ({ post }) => {
  console.log(post);
  const getPostDateTime = (updatedAt) => {
    const date = new Date(updatedAt).getDate();
    const month = new Date(updatedAt).getMonth();
    const year = new Date(updatedAt).getFullYear();
    const hours = new Date(updatedAt).getHours();
    const minutes = new Date(updatedAt).getMinutes();
    return `${date}/${month}/${year} ${hours}:${minutes}`;
  };
  return (
    <div className="flex flex-col  justify-center bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1">
        <div className="avatar">
          <div className="w-12 rounded-full hover:cursor-pointer">
            <img src="" alt="dp" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="font-medium hover:cursor-pointer">
            {post.fullName}{" "}
            <span className="text-slate-400 font-normal text-xs">
              @{post.username}
            </span>
          </span>
          <small className="text-slate-400 select-none">
            {getPostDateTime(post.updatedAt)}
          </small>
        </div>
        <i className="fa-solid fa-ellipsis-vertical ml-auto hover:cursor-pointer  hover:text-accent"></i>
      </section>
      <section className="flex flex-col py-2 lg:text-base">
        <p className="font-medium">{post.content}</p>
        <div className="pt-2">
          <span className="mr-4 hover:cursor-pointer  hover:text-accent">
            <i className="fa-regular fa-heart mr-1"></i>
            {post.likes.likeCount > 0
              ? `${post.likes.likeCount} Likes`
              : "Like"}
          </span>
          <span className="hover:cursor-pointer  hover:text-accent">
            <i className="fa-regular fa-bookmark"></i> Bookmark
          </span>
        </div>
      </section>
      <section className="flex flex-col ">
        <div className="border-2 rounded-md border-slate-400 p-2 flex justify-between items-center">
          <input
            type="text"
            placeholder="Say something..."
            className="w-full focus-visible:outline-none"
          />
          <button className="text-accent font-semibold flex items-center gap-1 hover:text-primary">
            Post <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        {post.comments.map((comment) => {
          return (
            <div className="flex gap-2 mt-3 items-start" key={comment._id}>
              <div className="avatar">
                <div className="w-8 rounded-full hover:cursor-pointer">
                  <img src="" alt="dp" />
                </div>
              </div>
              <div className="flex flex-col justify-center bg-bgmain p-2 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="font-medium  hover:cursor-pointer">
                    {comment.fullName}
                  </p>
                  <i className="fa-solid fa-ellipsis-vertical ml-1 md:ml-2 hover:cursor-pointer hover:text-accent"></i>
                </div>
                <p className="pt-1 text-slate-600">{comment.text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
