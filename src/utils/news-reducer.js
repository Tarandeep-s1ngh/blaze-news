import {
  ADD_TO_FAVORITES,
  FAV_TOGGLE,
  FULL_CONTENT_TOGGLE,
  REMOVE_FROM_FAVORITES,
  SET_LOADER,
  UPDATE_ALL_NEWS,
  UPDATE_DETAILED_VIEW,
  UPDATE_SOURCES,
  UPDATE_SOURCE_NAME,
  UPDATE_SOURCE_NEWS,
} from "./constants";

export const newsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SOURCES:
      return {
        ...state,
        sources: action.payload,
      };

    case UPDATE_ALL_NEWS:
      return {
        ...state,
        allNews: action.payload,
        favToggle: false,
      };

    case UPDATE_SOURCE_NEWS:
      return {
        ...state,
        allNews: action.payload,
        favToggle: false,
      };

    case UPDATE_DETAILED_VIEW:
      return {
        ...state,
        detailedView: {
          image: action.payload.image,
          title: action.payload.title,
          content: action.payload.content,
        },
      };

    case UPDATE_SOURCE_NAME:
      return {
        ...state,
        sourceName: action.payload ?? "No name found",
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.title !== action.payload
        ),
      };

    case FULL_CONTENT_TOGGLE:
      return {
        ...state,
        FullContentToggle: !state.FullContentToggle,
      };

    case FAV_TOGGLE:
      return {
        ...state,
        favToggle: true,
      };

    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
