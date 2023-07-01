import React, {useState} from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ScrollView, View} from 'native-base';
import {useRecoilValue} from 'recoil';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {TodoUncompletedList} from '@/features/todo/components/TodoUncompletedList';
import {useTodoAll} from '@/features/todo/hooks/useTodoAll';
import {useModal} from '@/hooks/useModal';
import {activeWannadoState} from '@/recoil/states/activeWannado';

import {AddTodoEditor} from './AddTodoEditor';
import {Buttons} from './Buttons';
import {styles} from './styles';
import {TodoCompletedBottomSheet} from './TodoCompletedBottomSheet';
import {UpdateTodoEditor} from './UpdateTodoEditor';

export const TodoPage = () => {
  const wannado = useRecoilValue(activeWannadoState);
  const {todoList, changeComplete, changeTitle, addTodo, deleteTodo} =
    useTodoAll(wannado ? wannado.id : '', wannado ? wannado.todos : []);

  const {
    isModalVisible: isShowEditor,
    showModal: openEditor,
    hideModal: closeEditor,
  } = useModal();
  const {
    isModalVisible: isShowCompletedTodos,
    showModal: openCompletedTodos,
    hideModal: closeCompletedTodos,
  } = useModal();

  const [updateTarget, setUpdateTarget] = useState<TodoSerialized>();
  const {
    isModalVisible: isShowUpdateTodoEditor,
    showModal: openUpdateTodoEditor,
    hideModal: closeUpdateTodoEditor,
  } = useModal();

  const onPressTodo = (todo: TodoSerialized) => {
    setUpdateTarget(todo);
    openUpdateTodoEditor();
  };

  const handlePressDelete = (todo: TodoSerialized) => {
    deleteTodo(todo.id);
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.todolist}>
          <TodoUncompletedList
            todoList={todoList}
            onChangeComplete={changeComplete}
            onPressTodo={onPressTodo}
            onPressDelete={handlePressDelete}
          />
        </ScrollView>
        <Buttons
          onPressAdd={openEditor}
          onPressShowCompletedTodos={openCompletedTodos}
        />

        <AddTodoEditor
          isShow={isShowEditor}
          addTodo={addTodo}
          onTouchOutside={closeEditor}
        />
        <TodoCompletedBottomSheet
          todoList={todoList}
          isShow={isShowCompletedTodos}
          onClose={closeCompletedTodos}
        />
        <UpdateTodoEditor
          isShow={isShowUpdateTodoEditor}
          todo={updateTarget}
          onUpdateTitle={changeTitle}
          onTouchOutside={closeUpdateTodoEditor}
          wannadoId={wannado ? wannado.id : ''}
        />
      </View>
    </BottomSheetModalProvider>
  );
};
