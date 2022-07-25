import { createContext, useContext, useReducer } from "react";
import { newsReducer } from "../utils";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const initialState = {
    sources: [],
    allNews: [],
    sourceNews: [],
    favorites: [],
    detailedView: {
      image: "",
      title: "",
      content: "",
    },
    sourceName: "",
    FullContentToggle: false,
    favToggle: false,
    loading: false,
  };

  const [newsState, newsDispatch] = useReducer(newsReducer, initialState);

  return (
    <NewsContext.Provider value={{ newsState, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };
