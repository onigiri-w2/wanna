import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useRecoilValue} from 'recoil';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {activeWannadoUncompletedTodosState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './TodoListItem';

type Props = {
  onPressTodo: (todo: TodoSerialized) => void;
};

export const TodoUncompletedList = ({onPressTodo}: Props) => {
  const todos = useRecoilValue(activeWannadoUncompletedTodosState);
  const handlePressTodo = useCallback((todo: TodoSerialized) => {
    onPressTodo(todo);
  }, []);
  const onPressLongTodo = useCallback((todo: TodoSerialized) => {}, []);

  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={todos}
      renderItem={({item}) => (
        <TodoListItem
          todo={item}
          onPressTodo={handlePressTodo}
          onLongPressTodo={onPressLongTodo}
        />
      )}
      keyExtractor={item => item.id}
      keyboardShouldPersistTaps="always"
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderRadius: BORDER_RADIUS,
    paddingTop: 16,
    paddingBottom: 200,
  },
});
