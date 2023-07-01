import React, {useState} from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'native-base';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {TodoUncompletedList} from '@/features/todo/components/TodoUncompletedList';

import {AddTodoEditor} from './components/AddTodoEditor';
import {Buttons} from './components/Buttons';
import {TodoCompletedBottomSheet} from './components/TodoCompletedBottomSheet';
import {UpdateTodoEditor} from './components/UpdateTodoEditor';
import {AddEditorShowProvider} from './providers/AddEditorShowProvider';
import {CompletedShowProvider} from './providers/CompletedShowProvider';
import {
  UpdateEditorShowProvider,
  useUpdateEditorShowContext,
} from './providers/UpdateEditorShowProvider';
import {styles} from './styles';

export const TodoPage = () => {
  return (
    <BottomSheetModalProvider>
      <AddEditorShowProvider>
        <CompletedShowProvider>
          <UpdateEditorShowProvider>
            <Content />
          </UpdateEditorShowProvider>
        </CompletedShowProvider>
      </AddEditorShowProvider>
    </BottomSheetModalProvider>
  );
};

const Content = () => {
  const {showModal: openUpdateEditor} = useUpdateEditorShowContext();
  const [updateTarget, setUpdateTarget] = useState<TodoSerialized>();
  const onPressTodo = (todo: TodoSerialized) => {
    setUpdateTarget(todo);
    openUpdateEditor();
  };

  return (
    <View style={styles.container}>
      <View style={styles.todolist}>
        <TodoUncompletedList onPressTodo={onPressTodo} />
      </View>
      <Buttons />
      <AddTodoEditor />
      <TodoCompletedBottomSheet />
      <UpdateTodoEditor todo={updateTarget} />
    </View>
  );
};
