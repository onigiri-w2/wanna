import * as zod from 'zod';

export const TitleSchema = zod.z.object({
  title: zod.string(),
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
