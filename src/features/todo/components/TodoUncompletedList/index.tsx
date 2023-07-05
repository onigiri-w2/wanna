import React from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {
  activeWannadoUncompletedTodosState,
  activeWannadoActions,
} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './TodoListItem';

export const TodoUncompletedList = React.memo(() => {
  const todos = useRecoilValue(activeWannadoUncompletedTodosState);

  return (
    <DraggableFlatList
      contentContainerStyle={styles.flatList}
      data={todos}
      renderItem={TodoListItem}
      keyExtractor={item => `draggable-item-${item.id}`}
      onDragEnd={({data}) => {
        activeWannadoActions.updateTodoOrder(data.map(d => d.id));
      }}
      keyboardShouldPersistTaps="always"
    />
  );
});

const styles = StyleSheet.create({
  flatList: {
    borderRadius: BORDER_RADIUS,
    paddingTop: 16,
    paddingBottom: 200,
  },
});
