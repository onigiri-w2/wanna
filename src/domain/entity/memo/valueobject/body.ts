import * as zod from 'zod';

export const ContentScheam = zod.z.object({
  content: zod.string(),
});
export type IContent = zod.infer<typeof ContentScheam>;
export class Content implements IContent {
  constructor(public readonly content: string) {
    ContentScheam.parse({content});
  }
  static new(content: string) {
    return new Content(content);
  }
}
