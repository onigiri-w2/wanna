import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/model/valueobjects/charId';

import {Todo, TodoSchema} from '../todo';

// TODO: publicのインスタンス変数はカプセル化できてないので、プライベートにした方が安全。でもまあ、今回はいいか。個人開発だし。たぶん
export type TodoListSerialized = ReturnType<TodoList['serialize']>;
export const TodoListSchema = zod.z.object({
  id: CharIdSchema,
  todos: zod.z.array(TodoSchema),
  uncomplementedTodoOrder: zod.z.array(CharIdSchema),
});
export type ITodoList = zod.infer<typeof TodoListSchema>;
export class TodoList implements ITodoList {
  constructor(
    public id: CharId,
    public todos: Todo[],
    public uncomplementedTodoOrder: CharId[],
  ) {}

  static new() {
    const id = CharId.new();
    return new TodoList(id, [], []);
  }

  public reorderUncomplementedTodoOrder(
    todoId: CharId,
    newOrder: number,
  ): void {
    const newUncomplementedTodoOrder = this.uncomplementedTodoOrder.filter(
      id => id.id !== todoId.id,
    );
    newUncomplementedTodoOrder.splice(newOrder, 0, todoId);
    this.uncomplementedTodoOrder = newUncomplementedTodoOrder;
  }

  public getTodoById(todoId: CharId): Todo | undefined {
    return this.todos.find(todo => todo.id.id === todoId.id);
  }
  public getTodoAllOrdered(): Todo[] {
    return this.uncomplementedTodoOrder
      .map(id => this.getTodoById(id))
      .filter((todo): todo is Todo => todo !== undefined);
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.uncomplementedTodoOrder.push(todo.id);
  }

  public removeTodoById(todoId: CharId): void {
    this.todos = this.todos.filter(todo => todo.id.id !== todoId.id);
    this.uncomplementedTodoOrder = this.uncomplementedTodoOrder.filter(
      id => id.id !== todoId.id,
    );
  }

  public serialize() {
    return {
      id: this.id.id,
      todos: this.todos.map(todo => todo.serialize()),
      uncomplementedTodoOrder: this.uncomplementedTodoOrder.map(id => id.id),
    };
  }

  public static deserialize(serialized: TodoListSerialized) {
    const id = new CharId(serialized.id);
    const todos = serialized.todos.map(todo => Todo.deserialize(todo));
    const uncomplementedTodoOrder = serialized.uncomplementedTodoOrder.map(
      id => new CharId(id),
    );
    return new TodoList(id, todos, uncomplementedTodoOrder);
  }
}
