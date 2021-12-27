import Prismic from '@prismicio/client';


  
  export const Client = (req = null) => (Prismic.client(
    process.env.PRISMIC_ENTRY_POINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  ));
