import React from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from '@/components/Checkbox';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {BORDER_GRAY_COLOR} from '@/styles/const';
type Props = {
  todo: TodoSerialized;
  onPressCheckbox: (complete: boolean, todo: TodoSerialized) => void;
  onPressTodo: (todo: TodoSerialized) => void;
  onLongPressTodo: (todo: TodoSerialized) => void;
  onPressDelete: (todo: TodoSerialized) => void;
};
export const TodoListItem = React.memo(
  ({
    todo,
    onPressCheckbox,
    onPressTodo,
    onLongPressTodo,
    onPressDelete,
  }: Props) => {
    const [checked, setChecked] = React.useState(todo.isCompleted);
    const handlePressCheckbox = (c: boolean) => {
      setChecked(c);
      setTimeout(() => {
        onPressCheckbox(c, todo);
      }, 300);
    };

    const handlePress = () => {
      onPressTodo(todo);
    };

    const handleLongPress = () => {
      onLongPressTodo(todo);
    };

    const handleDelete = () => {
      onPressDelete(todo);
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
          <Text flex={1} fontSize={16} px={4}>
            {todo.title}
          </Text>
          <AntDesign
            name="close"
            size={20}
            onPress={handleDelete}
            color="#999"
          />
        </HStack>
      </TouchableOpacity>
    );
  },
);
