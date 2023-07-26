import * as zod from 'zod';

import {CharId, CharIdSchema} from '@/domain/model/valueobjects/charId';

import {Todo, TodoSchema} from '../todo';

// TODO: publicのインスタンス変数はカプセル化できてないので、プライベートにした方が安全。でもまあ、今回はいいか。個人開発だし。たぶん
export type TodoListSerialized = ReturnType<TodoList['serialize']>;
export const TodoListSchema = zod.z.object({
  id: CharIdSchema,
  todos: zod.z.array(TodoSchema),
  uncompletedTodoOrder: zod.z.array(CharIdSchema),
});
export type ITodoList = zod.infer<typeof TodoListSchema>;
export class TodoList implements ITodoList {
  constructor(
    public id: CharId,
    public todos: Todo[],
    public uncompletedTodoOrder: CharId[],
  ) {}

  static new() {
    const id = CharId.new();
    return new TodoList(id, [], []);
  }

  public reorderUncomplementedTodoOrder(todoOrder: CharId[]): void {
    this.uncompletedTodoOrder = todoOrder;
  }

  public getTodoById(todoId: CharId): Todo | undefined {
    // TODO: ここ何かしらの制約がいるはず...。存在しないIdを渡されたらどうするかとか
    return this.todos.find(todo => todo.id.id === todoId.id);
  }

  public complementTodoById(todoId: CharId): Todo {
    const todo = this.getTodoById(todoId);
    if (!todo) {
      throw new Error('todo not found');
    }
    todo.complete();
    this.uncompletedTodoOrder = this.uncompletedTodoOrder.filter(
      id => id.id !== todoId.id,
    );
    return todo;
  }

  public uncomplementTodoById(todoId: CharId): Todo {
    const todo = this.getTodoById(todoId);
    if (!todo) {
      throw new Error('todo not found');
    }
    todo.uncomplete();
    this.uncompletedTodoOrder.push(todoId); // 先頭に追加
    return todo;
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.uncompletedTodoOrder.unshift(todo.id); // 先頭に追加
  }

  public removeTodo(todoId: CharId): void {
    this.todos = this.todos.filter(todo => todo.id.id !== todoId.id);
    this.uncompletedTodoOrder = this.uncompletedTodoOrder.filter(
      id => id.id !== todoId.id,
    );
  }

  public serialize() {
    return {
      id: this.id.id,
      todos: this.todos.map(todo => todo.serialize()),
      uncompletedTodoOrder: this.uncompletedTodoOrder.map(id => id.id),
    };
  }

  public static deserialize(serialized: TodoListSerialized) {
    const id = new CharId(serialized.id);
    const todos = serialized.todos.map(todo => Todo.deserialize(todo));
    const uncomplementedTodoOrder = serialized.uncompletedTodoOrder.map(
      id => new CharId(id),
    );
    return new TodoList(id, todos, uncomplementedTodoOrder);
  }
}
