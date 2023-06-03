import * as zod from 'zod';

export const EmojiSchema = zod.z.object({
  emoji: zod.string(),
});
export type IEmoji = zod.infer<typeof EmojiSchema>;

export class Emoji implements IEmoji {
  constructor(public readonly emoji: string) {
    EmojiSchema.parse({emoji});
  }

  static new(emoji: string) {
    return new Emoji(emoji);
  }
}
