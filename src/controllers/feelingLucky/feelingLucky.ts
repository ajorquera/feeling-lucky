import { IS_LOCAL, DEFAULT_IP_ADDRESS, IP_REGISTRY_DOMAIN, IP_REGISTRY_API_KEY } from './../../env';
import { GIPHY_API_KEY, GITHUB_PROFILE_URL } from '../../env';
import { RequestHandler } from "express";
import axios from 'axios';
import replaceContent from './replaceContent';


interface GYPHYResponse {
  data: {
      images: {
        original: {
          url: string
        }
      }
  }
};

interface IPRegistryResponse {
  location: {
    country: {
      name: string;
    },
    city: string;
    language: {
      //ISO code https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
      code: string,
      name: string
    }
  }
}

const helloWorld: RequestHandler = async (req, res, next) => {
  const ipAddress = (IS_LOCAL ? DEFAULT_IP_ADDRESS : req.ip) as string;
    
  let randomImgUrl: string;
  let locationData: IPRegistryResponse;
  try {
    const response = await axios.get<IPRegistryResponse>(`https://${IP_REGISTRY_DOMAIN}/${ipAddress}?key=${IP_REGISTRY_API_KEY}`);
    locationData = response.data;
  } catch (e) {
    return next({code: 'IP_REGISTRY_ERROR', data: e});
  }
  
  const query = encodeURIComponent(locationData.location.country.name);
  try {
    const giphyResponse = await axios.get<GYPHYResponse>(`https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${GIPHY_API_KEY}`);
    randomImgUrl = giphyResponse.data.data.images.original.url;
  } catch(e) {
    next(e);
  }
  
  try {
    await replaceContent(randomImgUrl);
  } catch(e) {
    next(e);
  }

  res.redirect(GITHUB_PROFILE_URL);
};

export default helloWorld;