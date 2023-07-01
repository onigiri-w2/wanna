import React from 'react';
import {FlatList} from 'react-native';

import {useRecoilValue} from 'recoil';

import {activeWannadoCompletedTodosState} from '@/recoil/states/activeWannado';
import {BORDER_RADIUS} from '@/styles/const';

import {TodoListItem} from './TodoListItem';

export const TodoCompletedList = () => {
  const todos = useRecoilValue(activeWannadoCompletedTodosState);
  return (
    <FlatList
      contentContainerStyle={{
        borderRadius: BORDER_RADIUS,
      }}
      // TODO: ここ完了日順に並べたい
      data={todos}
      renderItem={({item}) => <TodoListItem todo={item} />}
      keyExtractor={item => item.id}
    />
  );
};
