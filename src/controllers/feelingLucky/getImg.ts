import { GIPHY_API_KEY } from './../../env';
import axios from "axios";

const getImg = async (query: string) => {
  const giphyResponse = await axios.get<GYPHYResponse>(`https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${GIPHY_API_KEY}`);
  return giphyResponse.data.data.images.original.url;
};

export default getImg;