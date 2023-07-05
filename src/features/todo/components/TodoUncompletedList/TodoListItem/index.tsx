import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import {HStack, Text} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from '@/components/Checkbox';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {activeWannadoActions} from '@/recoil/states/activeWannado';
import {
  editTargetTodoActions,
  editTodoShowActions,
} from '@/recoil/states/editTargetTodo';
import {
  BORDER_GRAY_COLOR,
  FONT_SIZE_NORMAL,
  ICON_SIZE_NORMAL,
} from '@/styles/const';

export const TodoListItem = ({
  item,
  drag,
  isActive,
  getIndex,
}: RenderItemParams<TodoSerialized>) => {
  const [checked, setChecked] = React.useState(item.isCompleted);

  const handlePressCheckbox = (c: boolean) => {
    //TODO: もしドメイン側が失敗したら、チェックしないもしくは戻す的な実装にするかも
    setChecked(c);
    setTimeout(() => {
      if (c) {
        activeWannadoActions.completeTodo(item.id);
      } else {
        activeWannadoActions.uncompleteTodo(item.id);
      }
    }, 300);
  };
  const handlePress = useCallback(() => {
    editTargetTodoActions.setEditTarget(item);
    editTodoShowActions.setShowTrue();
  }, [item]);

  const handleDelete = () => {
    activeWannadoActions.deleteTodo(item.id);
  };

  return (
    <ScaleDecorator>
      <TouchableOpacity
        delayLongPress={200}
        onLongPress={drag}
        onPress={handlePress}
        disabled={isActive}>
        <HStack
          alignItems="center"
          bg="white"
          px={4}
          py={3}
          borderBottomWidth={1}
          borderBottomColor={BORDER_GRAY_COLOR}>
          <Checkbox checked={checked} onPress={handlePressCheckbox} />
          <Text flex={1} fontSize={FONT_SIZE_NORMAL} px={4}>
            {item.title}
          </Text>
          <AntDesign
            name="close"
            size={ICON_SIZE_NORMAL}
            onPress={handleDelete}
            color="#999"
          />
        </HStack>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
