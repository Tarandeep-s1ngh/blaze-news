import axios from "axios";
import { API_KEY } from "../constants";

export const getSources = async () => {
  try {
    let { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
    );
    if (data.sources) return data.sources;
    return [];
  } catch (error) {
    throw new Error(error, "Failed to fetch Sources");
  }
};
