import {StyleSheet, Keyboard} from 'react-native';

import {HStack, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {BACKGROUND_GRAY_COLOR, ACCENT_COLOR} from '@/styles/const';

type EditToolBarProps = {
  editable: boolean;
  onPressDone: () => void;
};
export const EditToolBar = ({editable, onPressDone}: EditToolBarProps) => {
  const handlePressHideKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      style={editable ? styles.editable : styles.notEditable}>
      <HStack
        bg={BACKGROUND_GRAY_COLOR}
        px={4}
        py={1}
        space={4}
        alignItems="center">
        <Text
          ml="auto"
          fontWeight="bold"
          fontSize={18}
          color={ACCENT_COLOR}
          onPress={onPressDone}>
          完了
        </Text>
        <MaterialCommunityIcons
          name="keyboard-close"
          size={24}
          color="#555"
          onPress={handlePressHideKeyboard}
        />
      </HStack>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  editable: {
    display: 'flex',
  },
  notEditable: {
    display: 'none',
  },
});
