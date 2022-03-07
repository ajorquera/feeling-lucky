import { RequestHandler } from "express";

import { IS_LOCAL, DEFAULT_IP_ADDRESS, GITHUB_PROFILE_URL } from './../../env';
import replaceContent from './replaceContent';
import getLocation from './getLocation';
import getImg from './getImg';

const helloWorld: RequestHandler = async (req, res, next: NextErrorFn) => {
  const ipAddress = (IS_LOCAL ? DEFAULT_IP_ADDRESS : req.ip) as string;
    
  let locationData: IPRegistryResponse;
  try {
    locationData = await getLocation(ipAddress);
  } catch (e) {
    return next({code: 'IP_REGISTRY_ERROR', data: e});
  }
  
  let randomImgUrl = '';
  try {
    const query = encodeURIComponent(locationData.location.country.name);
    randomImgUrl = await getImg(query);
  } catch(e) {
    return next({code: 'GET_IMG_ERROR', data:e});
  }
  
  try {
    await replaceContent(randomImgUrl, locationData.location.country.code);
  } catch(e) {
    return next({code: 'REPLACE_CONTENT', data: e});
  }

  res.redirect(GITHUB_PROFILE_URL);
};

export default helloWorld;