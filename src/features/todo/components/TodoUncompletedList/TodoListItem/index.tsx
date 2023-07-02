import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRecoilValue} from 'recoil';

import {Checkbox} from '@/components/Checkbox';
import * as usecase from '@/domain//usecase/todo';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {
  activeWannadoActions,
  activeWannadoIdState,
} from '@/recoil/states/activeWannado';
import {
  BORDER_GRAY_COLOR,
  FONT_SIZE_NORMAL,
  ICON_SIZE_NORMAL,
} from '@/styles/const';

type Props = {
  todo: TodoSerialized;
  onPressTodo: (todo: TodoSerialized) => void;
  onLongPressTodo: (todo: TodoSerialized) => void;
};
export const TodoListItem = React.memo(
  ({todo, onPressTodo, onLongPressTodo}: Props) => {
    const wannadoId = useRecoilValue(activeWannadoIdState);
    const [checked, setChecked] = React.useState(todo.isCompleted);

    const handlePressCheckbox = (c: boolean) => {
      setChecked(c);
      setTimeout(() => {
        if (c) {
          activeWannadoActions.completeTodo(todo.id);
          usecase.completeTodo(wannadoId, todo.id);
        } else {
          activeWannadoActions.uncompleteTodo(todo.id);
          usecase.uncompleteTodo(wannadoId, todo.id);
        }
      }, 300);
    };

    const handlePress = () => {
      onPressTodo(todo);
    };

    const handleLongPress = () => {
      onLongPressTodo(todo);
    };

    const handleDelete = () => {
      activeWannadoActions.deleteTodo(todo.id);
      usecase.deleteTodo(wannadoId, todo.id);
    };

    return (
      <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
        <HStack
          alignItems="center"
          px={4}
          py={3}
          borderBottomWidth={1}
          borderBottomColor={BORDER_GRAY_COLOR}>
          <Checkbox checked={checked} onPress={handlePressCheckbox} />
          <Text flex={1} fontSize={FONT_SIZE_NORMAL} px={4}>
            {todo.title}
          </Text>
          <AntDesign
            name="close"
            size={ICON_SIZE_NORMAL}
            onPress={handleDelete}
            color="#999"
          />
        </HStack>
      </TouchableOpacity>
    );
  },
);
