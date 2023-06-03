import * as zod from 'zod';

export const UrlSchema = zod.z.object({
  url: zod.string().url(),
});
export type IUrl = zod.infer<typeof UrlSchema>;

export class Url implements IUrl {
  constructor(public readonly url: string) {
    UrlSchema.parse({url});
  }

  static new(url: string) {
    return new Url(url);
  }
}
