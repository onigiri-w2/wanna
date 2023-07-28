import React from 'react';
import {StyleSheet} from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';
import {useRecoilValue} from 'recoil';

import {TodoSerialized} from '@/domain/model/entity/todo';
import {showFlashMessage} from '@/functions/flashMessageController';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {activeWannadoTodoListMergedState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './Item';

export const TodoList = React.memo(() => {
  const todos = useRecoilValue(activeWannadoTodoListMergedState);
  const handleDragEnd = ({data}: {data: TodoSerialized[]}) => {
    if (!isListDivided(data)) {
      showFlashMessage('完了済みのTODOは並び替えできません。', 'default');
    }
    const uncompletedTodoIds = data.filter(d => !d.isCompleted).map(d => d.id);
    activeWannadoActions.updateTodoOrder(uncompletedTodoIds);
  };

  return (
    <DraggableFlatList
      contentContainerStyle={styles.flatList}
      data={todos}
      renderItem={TodoListItem}
      keyExtractor={item => `draggable-item-${item.id}`}
      onDragEnd={handleDragEnd}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
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

function isListDivided(todos: TodoSerialized[]): boolean {
  let hasCompletedSectionStarted = false;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isCompleted) {
      hasCompletedSectionStarted = true;
    } else if (!todos[i].isCompleted && hasCompletedSectionStarted) {
      return false;
    }
  }

  return true;
}
