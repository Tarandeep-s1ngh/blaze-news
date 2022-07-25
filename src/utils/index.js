export {
  ADD_TO_FAVORITES,
  UPDATE_SOURCES,
  UPDATE_ALL_NEWS,
  UPDATE_SOURCE_NEWS,
  UPDATE_SOURCE_NAME,
  UPDATE_DETAILED_VIEW,
  REMOVE_FROM_FAVORITES,
  FULL_CONTENT_TOGGLE,
  FAV_TOGGLE,
  SET_LOADER,
  isInFavorites,
} from "./constants";

export { newsReducer } from "./news-reducer";
export { getSources } from "./actions/getSources";
export { getNews } from "./actions/getNews";

export { triggerToast } from "./toastTrigger";
