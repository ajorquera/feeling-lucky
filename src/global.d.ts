interface ErrorType {
  code: 'IP_REGISTRY_ERROR' | 'GET_IMG_ERROR' | 'REPLACE_CONTENT',
  data: unknown
}

type NextErrorFn = (error: ErrorType) => void;

interface IPRegistryResponse {
  location: {
    country: {
      name: string;
      code: string;
    },
    city: string;
    language: {
      //ISO code https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
      code: string,
      name: string
    }
  }
}