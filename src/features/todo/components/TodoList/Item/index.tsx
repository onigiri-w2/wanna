import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {HStack, Text} from 'native-base';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from '@/components/Checkbox';
import {TodoSerialized} from '@/domain/model/entity/todo';
import {activeWannadoActions} from '@/recoil/actions/activeWannadoActions';
import {
  editTargetTodoActions,
  editTodoShowActions,
} from '@/recoil/states/editTargetTodo';
import {commonStyles} from '@/styles/commonRNStyles';
import {
  BORDER_GRAY_COLOR,
  FONT_COLOR_NORMAL,
  FONT_COLOR_VERY_LIGHT,
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
    activeWannadoActions.deleteTodo(item.id, checked);
  };

  return (
    <ScaleDecoratorWrapper scalable={!item.isCompleted}>
      <HStack
        alignItems="center"
        bg="white"
        px={4}
        borderBottomWidth={1}
        borderBottomColor={BORDER_GRAY_COLOR}>
        <Checkbox checked={checked} onPress={handlePressCheckbox} />
        <TouchableOpacity
          style={[
            commonStyles.flex1,
            {
              paddingVertical: 12,
              marginHorizontal: 12,
            },
          ]}
          delayLongPress={200}
          onLongPress={drag}
          onPress={handlePress}
          disabled={isActive}>
          <Text
            fontSize={FONT_SIZE_NORMAL}
            strikeThrough={checked}
            color={checked ? FONT_COLOR_VERY_LIGHT : FONT_COLOR_NORMAL}>
            {item.title}
          </Text>
        </TouchableOpacity>
        <AntDesign
          name="close"
          size={ICON_SIZE_NORMAL + 4}
          onPress={handleDelete}
          color="#ccc"
        />
      </HStack>
    </ScaleDecoratorWrapper>
  );
};

const ScaleDecoratorWrapper = ({
  scalable,
  children,
}: {
  scalable: boolean;
  children: React.ReactNode;
}) => {
  return (
    <View>
      {scalable ? <ScaleDecorator>{children}</ScaleDecorator> : <>{children}</>}
    </View>
  );
};
