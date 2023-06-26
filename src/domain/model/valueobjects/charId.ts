import uuid from 'react-native-uuid';
import * as zod from 'zod';

const E_INVALID_CHAR_ID = '不正なIdです';

export const CharIdSchema = zod.z.object({
  id: zod.string().uuid(E_INVALID_CHAR_ID),
});
export type ICharId = zod.infer<typeof CharIdSchema>;

export class CharId implements ICharId {
  constructor(public readonly id: string) {
    CharIdSchema.parse({id});
  }

  static new() {
    const id = uuid.v4().toString();
    return new CharId(id);
  }
}
