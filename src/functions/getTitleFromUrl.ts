import axios from 'axios';

import {
  NotFoundTitleTag,
  TitleLengthIsTooLong,
  UrlStatusIsNot200,
  UrlIsEmpty,
} from '@/utils/exceptions';

// TODO: ドメイン層の定義を使うべき。DRYにしないといけない。
const TITLE_MAX_LENGTH = 100;

export const getTitleFromUrl = async (url: string): Promise<string> => {
  if (url === '') throw new UrlIsEmpty();

  // Make a HTTP GET request to the URL
  try {
    const response = await axios.get(url);
    // Check if the HTTP response status code is 200
    if (response.status !== 200) throw new UrlStatusIsNot200();

    // Regular expression to match the content of the <title> tag within the <head> tag
    const headRegEx = /<head[^>]*>([\s\S]*?)<\/head>/i;
    const headMatch = response.data.match(headRegEx);
    const headContent = headMatch ? headMatch[1] : '';

    const titleRegEx = /<title>(.*?)<\/title>/i;
    const titleMatch = headContent.match(titleRegEx);

    // Check if a <title> tag was found within the <head> tag
    if (!titleMatch || titleMatch.length < 2) throw new NotFoundTitleTag();

    const title = titleMatch[1];

    // Check if the length of the <title> tag is less than or equal to 100 characters
    if (title.length === TITLE_MAX_LENGTH) throw new TitleLengthIsTooLong();

    // Return the content of the <title> tag
    return title;
  } catch {
    throw new UrlStatusIsNot200();
  }
};
