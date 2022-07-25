import axios from "axios";
import { API_KEY, SET_LOADER } from "../constants";

export const getNews = async (
  queryString = "top-headlines?country=in&",
  dispatch
) => {
  try {
    dispatch({
      type: SET_LOADER,
      payload: true,
    });
    let { data } = await axios.get(
      `https://newsapi.org/v2/${queryString}apiKey=${API_KEY}`
    );
    dispatch({
      type: SET_LOADER,
      payload: false,
    });
    if (data.articles) return data.articles;
    return [];
  } catch (error) {
    throw new Error(error, "Failed to fetch Sources");
  }
};
