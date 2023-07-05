import React from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {TodoUncompletedList} from '@/features/todo/components/TodoUncompletedList';

import {AddTodoEditor} from './components/AddTodoEditor';
import {Buttons} from './components/Buttons';
import {TodoCompletedBottomSheet} from './components/TodoCompletedBottomSheet';
import {UpdateTodoEditor} from './components/UpdateTodoEditor';
import {AddEditorShowProvider} from './providers/AddEditorShowProvider';
import {CompletedShowProvider} from './providers/CompletedShowProvider';
import {styles} from './styles';

export const TodoPage = () => {
  return (
    <BottomSheetModalProvider>
      <AddEditorShowProvider>
        <CompletedShowProvider>
          <Content />
        </CompletedShowProvider>
      </AddEditorShowProvider>
    </BottomSheetModalProvider>
  );
};

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.todolist}>
        <TodoUncompletedList />
      </View>
      <Buttons />
      <AddTodoEditor />
      <TodoCompletedBottomSheet />
      <UpdateTodoEditor />
    </View>
  );
};
