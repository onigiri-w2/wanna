import React from 'react';

import {HStack, Text} from 'native-base';

import {Checkbox} from '@/components/Checkbox';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {FONT_COLOR_NORMAL, FONT_SIZE_NORMAL} from '@/styles/const';

type Props = {
  todo: TodoSerialized;
};
export const TodoListItem = React.memo(({todo}: Props) => {
  const [checked, setChecked] = React.useState(todo.isCompleted);

  const handlePressCheckbox = (c: boolean) => {
    //TODO: もしドメイン側が失敗したら、チェックしないもしくは戻す的な実装にするかも
    setChecked(c);
    setTimeout(() => {
      if (c) {
        activeWannadoActions.completeTodo(todo.id);
      } else {
        activeWannadoActions.uncompleteTodo(todo.id);
      }
    }, 300);
  };

  return (
    <HStack alignItems="center" px={4} py={2}>
      <Checkbox checked={checked} onPress={handlePressCheckbox} size={24} />
      <Text fontSize={FONT_SIZE_NORMAL} px={4} color={FONT_COLOR_NORMAL}>
        {todo.title}
      </Text>
    </HStack>
  );
});
