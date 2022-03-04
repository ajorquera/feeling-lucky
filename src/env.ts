export const GITHUB_OWNER_USERNAME = 'ajorquera';
export const GITHUB_REPOSITORY = 'ajorquera';
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_OWNER_USERNAME}`;
export const DEFAULT_IP_ADDRESS = '83.61.2.41';

export const IS_LOCAL = process.env.IS_LOCAL;
export const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
export const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
export const IP_REGISTRY_DOMAIN = process.env.IP_REGISTRY_DOMAIN;
export const IP_REGISTRY_API_KEY = process.env.IP_REGISTRY_API_KEY;

// Mandatory variables
[
  'GIPHY_API_KEY', 
  'GITHUB_PERSONAL_ACCESS_TOKEN', 
  'IP_REGISTRY_DOMAIN', 
  'IP_REGISTRY_API_KEY'
].forEach((key: string) => {
  if(!process.env[key]) {
    console.error(`Missing mandatory env variable: ${key}`);
    process.exit(1);
  }
});