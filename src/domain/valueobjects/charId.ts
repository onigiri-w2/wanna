import uuid from 'react-native-uuid';
import * as zod from 'zod';

export const CharIdSchema = zod.z.object({
  id: zod.string().uuid(),
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
