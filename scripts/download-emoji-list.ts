import fs from 'fs';
import path from 'path';

import axios from 'axios';
import cheerio from 'cheerio';

const url =
  'https://ja.wikipedia.org/wiki/Unicode%E3%81%AEEmoji%E3%81%AE%E4%B8%80%E8%A6%A7';

async function scrapeEmojiData() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const emojiList: string[] = [];

    $('.wikitable.sortable tbody tr').each((index, element) => {
      const cells = $(element).find('td');
      const emoji = $(cells[0]).text().trim();
      emojiList.push(`${emoji}`);
    });

    emojiList.splice(0, 230);

    const jsonData = JSON.stringify(emojiList);
    const filePath = path.join(
      __dirname,
      '../src/assets/data',
      'emoji-list.json',
    );
    fs.writeFileSync(filePath, jsonData);

    console.log('Emoji data has been scraped and saved to emoji-list.json');
  } catch (error) {
    console.error('An error occurred while scraping emoji data:', error);
  }
}

scrapeEmojiData();
