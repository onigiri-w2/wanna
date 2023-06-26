import * as zod from 'zod';

const E_TITLE_MIN_LENGTH = 'タイトルの最小文字数は1文字です。';
const E_TITLE_MAX_LENGTH = 'タイトルの最大文字数は100文字です。';

export const TitleSchema = zod.z.object({
  title: zod.string().min(1, E_TITLE_MIN_LENGTH).max(100, E_TITLE_MAX_LENGTH),
});
export type ITitle = zod.infer<typeof TitleSchema>;
export class Title implements ITitle {
  constructor(public readonly title: string) {
    TitleSchema.parse({title});
  }
  static new(content: string) {
    return new Title(content);
  }
}
