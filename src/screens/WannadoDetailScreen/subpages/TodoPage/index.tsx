import React from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {TodoUncompletedList} from '@/features/todo/components/TodoUncompletedList';

import {AddTodoEditor} from './components/AddTodoEditor';
import {AddButton, DoneButton} from './components/Buttons';
import {TodoCompletedBottomSheet} from './components/TodoCompletedBottomSheet';
import {AddEditorShowProvider} from './providers/AddEditorShowProvider';
import {CompletedShowProvider} from './providers/CompletedShowProvider';
import {styles} from './styles';

export const TodoPage = () => {
  return (
    <BottomSheetModalProvider>
      <AddEditorShowProvider>
        <CompletedShowProvider>
          <Content />
          <DoneButton />
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
      <AddTodoEditor />
      <TodoCompletedBottomSheet />
      <AddButton />
      <AddTodoEditor />
    </View>
  );
};
