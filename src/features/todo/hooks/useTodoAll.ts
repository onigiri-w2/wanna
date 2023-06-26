import {useState, useEffect, useCallback} from 'react';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {
  completeTodo,
  uncompleteTodo,
  createTodo,
  deleteTodo as deleteTodoDDD,
} from '@/domain/usecase/todo';

export const useTodoAll = (
  wannadoId: string,
  initialTodoList: TodoSerialized[],
) => {
  const [todoList, setTodoList] = useState<TodoSerialized[]>([]);

  const changeComplete = (todoId: string, complete: boolean) => {
    if (complete) completeTodo(wannadoId, todoId);
    else uncompleteTodo(wannadoId, todoId);
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: complete,
          };
        }
        return todo;
      });
    });
  };

  const changeTitle = (todoId: string, title: string) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (todoId: string) => {
    deleteTodoDDD(wannadoId, todoId);
    setTodoList(todoList => {
      return todoList.filter(todo => todo.id !== todoId);
    });
  };

  const addTodo = useCallback(
    async (title: string) => {
      const todo = await createTodo(wannadoId, title);
      if (!todo) return;
      setTodoList(todoList => {
        return [...todoList, todo];
      });
    },
    [wannadoId],
  );

  useEffect(() => {
    if (initialTodoList.length === 0 && todoList.length === 0) return;
    setTodoList(initialTodoList);
  }, [initialTodoList]);

  return {
    todoList,
    changeComplete,
    changeTitle,
    addTodo,
    deleteTodo,
  };
};
