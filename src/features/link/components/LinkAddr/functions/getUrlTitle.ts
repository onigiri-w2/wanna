import axios from 'axios';

export const getUrlTitle = async (url: string) => {
  const response = await axios.get(url);
  return response.data.match(/<title[^>]*>([^<]+)<\/title>/i)[1];
};
