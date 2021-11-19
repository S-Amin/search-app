import axios from "axios";
const YOUR_API_KEY = "aad1f4220569b21649ea3284ab406ebc";
const baseUrl = `https://libraries.io/api/search?api_key=${YOUR_API_KEY}`;

export const fetchData = (query: string, page?: number) => {
  const params = { q: query, page: page || 1, per_page: 10 };
  return axios.get(baseUrl, { params });
};
