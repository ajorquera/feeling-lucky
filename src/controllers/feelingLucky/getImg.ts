import { GIPHY_API_KEY } from './../../env';
import axios from "axios";

interface GiphyObj {
  images: {
    original: {
      url: string
    }
  }
}

interface GYPHYSearchResponse {
  data: GiphyObj[]
}

interface GYPHYResponse {
  data: GiphyObj
}


const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomImg = async (query: string) => {
  const giphyResponse = await axios.get<GYPHYResponse>(`https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${GIPHY_API_KEY}`);
  return giphyResponse.data.data.images.original.url;
};


export const getSearchImg = async (query: string) => {
  const offset = getRandomInt(0, 20);
  const giphyResponse = await axios.get<GYPHYSearchResponse>(`https://api.giphy.com/v1/gifs/search?limit=1&offset=${offset}&q=${query}&api_key=${GIPHY_API_KEY}`);
  return giphyResponse.data.data[0].images.original.url;
};

export default getSearchImg;