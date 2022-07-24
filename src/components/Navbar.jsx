import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <nav className="hidden h-full w-full bg-bgmain pt-4 md:flex flex-col justify-start gap-2 text-slate-600 text-sm font-semibold [&>*]:p-2 [&>*]:w-full [&>*]:rounded-md [&>*]:hover:cursor-pointer [&>.active]:bg-slate-50 [&>.active]:text-accent">
      <Link to="/" className="flex gap-2 items-center hover:bg-slate-50 active">
        <i className="fas fa-home fa-lg"></i>
        <span>All Sources</span>
      </Link>
      <Link to="/" className="flex gap-2 items-center hover:bg-slate-50">
        <i className="fas fa-compass fa-lg"></i>
        <span>Source</span>
      </Link>
      <Link to="/" className="flex gap-2 items-center hover:bg-slate-50">
        <i className="fas fa-bookmark fa-lg"></i>
        <span>Source</span>
      </Link>
      <Link to="/" className="flex gap-2 items-center hover:bg-slate-50">
        <i className="fas fa-user-circle fa-lg"></i>
        <span>Source</span>
      </Link>
      <button className="flex gap-2 items-center hover:bg-slate-50">
        <i className="fa-solid fa-right-from-bracket fa-lg"></i>
        <span>Source</span>
      </button>
      <button className="bg-accent text-slate-50 rounded-md py-1 hover:bg-primary">
        Favorites
      </button>
    </nav>
  );
};
