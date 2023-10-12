import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "35df5bba99msh9e27c7785ea9b0ap1d4416jsnde0ca412215c",
    },
  });

  return data;
};
