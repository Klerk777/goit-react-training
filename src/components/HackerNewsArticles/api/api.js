import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchHomePageArticles = async () => {
  const response = await axios.get(
    `http://hn.algolia.com/api/v1/search?tags=front_page`
  );

  return response.data.hits;
};

export const fetchArticlesWithQuery = async (searchQuery) => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
  );

  return response.data.hits;
};
