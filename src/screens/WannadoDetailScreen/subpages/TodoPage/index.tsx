import React from 'react';

import {View} from 'native-base';

import {TodoList} from '@/features/todo/components/TodoList';

import {AddTodoEditor} from './components/AddTodoEditor';
import {AddButton} from './components/Buttons';
import {UpdateTodoEditor} from './components/UpdateTodoEditor';
import {AddEditorShowProvider} from './providers/AddEditorShowProvider';
import {CompletedShowProvider} from './providers/CompletedShowProvider';
import {styles} from './styles';

export const TodoPage = () => {
  return (
    <AddEditorShowProvider>
      <CompletedShowProvider>
        <Content />
      </CompletedShowProvider>
    </AddEditorShowProvider>
  );
};

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.todolist}>
        <TodoList />
      </View>
      <AddTodoEditor />
      <AddButton />
      <UpdateTodoEditor />
    </View>
  );
};
