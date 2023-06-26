import * as zod from 'zod';

import emojiData from '@/assets/data/emoji-list.json';

const E_EMOJI_EMPTY = '絵文字が空です。';

export const EmojiSchema = zod.z.object({
  emoji: zod.string().nonempty(E_EMOJI_EMPTY),
});
export type IEmoji = zod.infer<typeof EmojiSchema>;

export class Emoji implements IEmoji {
  constructor(public readonly emoji: string) {
    EmojiSchema.parse({emoji});
  }

  static new(emoji: string) {
    if (!emoji) {
      const randomIndex = Math.floor(Math.random() * emojiData.length);
      emoji = emojiData[randomIndex];
    }
    return new Emoji(emoji);
  }
}
