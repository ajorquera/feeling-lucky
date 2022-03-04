import { IP_REGISTRY_DOMAIN, IP_REGISTRY_API_KEY } from './../../env';
import axios from "axios";

const getLocation = async (ipAddress: string) => {
  const response = await axios.get<IPRegistryResponse>(`https://${IP_REGISTRY_DOMAIN}/${ipAddress}?key=${IP_REGISTRY_API_KEY}`);

  return response.data;
};

export default getLocation;