import * as zod from 'zod';

const httpRegex = /^https?:\/\/.*/;
const E_URL_INVALID = 'URLが不正です。';

export const HttpUrlSchema = zod.z.object({
  url: zod.string().refine(url => httpRegex.test(url), E_URL_INVALID),
});
export type IHttpUrl = zod.infer<typeof HttpUrlSchema>;

export class HttpUrl implements IHttpUrl {
  constructor(public readonly url: string) {
    HttpUrlSchema.parse({url});
  }

  static new(url: string) {
    return new HttpUrl(url);
  }
}
