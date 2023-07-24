import * as zod from 'zod';

export const MAX_TODO_TITLE_LENGTH = 100;
const E_TITLE_MIN_LENGTH = 'タイトルの最小文字数は1文字です。';
const E_TITLE_MAX_LENGTH = `タイトルの最大文字数は${MAX_TODO_TITLE_LENGTH}文字です。`;

export const TitleSchema = zod.z.object({
  title: zod.string().min(1, E_TITLE_MIN_LENGTH).max(100, E_TITLE_MAX_LENGTH),
});
export type ITitle = zod.infer<typeof TitleSchema>;

export class Title implements ITitle {
  constructor(public readonly title: string) {
    this.title = title;
    TitleSchema.parse({title});
  }

  static new(title: string) {
    return new Title(title);
  }
}
