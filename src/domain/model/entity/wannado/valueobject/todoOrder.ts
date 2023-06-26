import * as zod from 'zod';

import {CharId, CharIdSchema} from '../../../valueobjects/charId';

export type TodoOrderSerialized = ReturnType<TodoOrder['serialize']>;
export const TodoOrderSchema = zod.z.object({
  todoIds: zod.z.array(CharIdSchema),
});
export type ITodoOrder = zod.infer<typeof TodoOrderSchema>;

export class TodoOrder implements ITodoOrder {
  constructor(public todoIds: CharId[]) {}

  static new() {
    return new TodoOrder([]);
  }
  public push(todoId: CharId) {
    return new TodoOrder([todoId, ...this.todoIds]);
  }
  public remove(todoId: CharId) {
    return new TodoOrder(this.todoIds.filter(id => id.id !== todoId.id));
  }
  public reorder(todoId: CharId, index: number) {
    const todoIds = this.todoIds.filter(id => id.id !== todoId.id);
    todoIds.splice(index, 0, todoId);
    return new TodoOrder(todoIds);
  }

  public serialize() {
    return this.todoIds.map(id => id.id);
  }

  public static deserialize(todoOrderedList: TodoOrderSerialized) {
    return new TodoOrder(todoOrderedList.map(id => new CharId(id)));
  }
}
