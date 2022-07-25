export const API_KEY = "fd2c0adfea5b4e4882f799f9a8eab7db";

export const UPDATE_SOURCES = "UPDATE_SOURCES";
export const UPDATE_ALL_NEWS = "UPDATE_ALL_NEWS";
export const UPDATE_SOURCE_NEWS = "UPDATE_SOURCE_NEWS";
export const UPDATE_DETAILED_VIEW = "UPDATE_DETAILED_VIEW";
export const UPDATE_SOURCE_NAME = "UPDATE_SOURCE_NAME";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const FULL_CONTENT_TOGGLE = "FULL_CONTENT_TOGGLE";
export const FAV_TOGGLE = "FAV_TOGGLE";
export const SET_LOADER = "SET_LOADER";

export const isInFavorites = (state, article) =>
  state.favorites.find((favArticle) => favArticle.title === article.title);
