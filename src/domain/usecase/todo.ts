import {repo} from '@/domain/config';

import {TodoSerialized, Todo} from '../model/entity/todo';
import {CharId} from '../model/valueobjects/charId';
import {NotFoundTodo, NotFoundWannado} from '../utlis/exception';

export async function createTodo(
  wanandoId: string,
  title: string,
): Promise<TodoSerialized | undefined> {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const todo = Todo.new(title);
  wannado.addTodo(todo);
  repo.update(wannado);
  return todo.serialize();
}

export async function updateTodoTitle(
  wanandoId: string,
  todoId: string,
  title: string,
) {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const todo = wannado.todos.find(todo => todo.id.id === todoId);
  if (!todo) throw new NotFoundTodo();

  todo.updateTitle(title);
  repo.update(wannado);
}

export async function completeTodo(wannadoId: string, todoId: string) {
  const wannado = await repo.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  const todo = wannado.todos.find(todo => todo.id.id === todoId);
  if (!todo) throw new NotFoundTodo();

  todo.complete();
  repo.update(wannado);
  return todo.serialize();
}

export async function uncompleteTodo(wanandoId: string, todoId: string) {
  const wannado = await repo.find(new CharId(wanandoId));
  if (!wannado) throw new NotFoundWannado();

  const todo = wannado.todos.find(todo => todo.id.id === todoId);
  if (!todo) throw new NotFoundTodo();

  todo.uncomplete();
  repo.update(wannado);
  return todo.serialize();
}

export async function deleteTodo(
  wannadoId: string,
  todoId: string,
): Promise<void> {
  const wannado = await repo.find(new CharId(wannadoId));
  if (!wannado) throw new NotFoundWannado();

  wannado.removeTodo(new CharId(todoId));
  repo.update(wannado);
}
