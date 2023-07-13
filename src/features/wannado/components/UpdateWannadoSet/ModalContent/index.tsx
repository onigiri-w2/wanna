import {StyleSheet} from 'react-native';

import {Text, HStack, Button, View} from 'native-base';

import {
  ACCENT_COLOR,
  ACCENT_COLOR_HEAVY,
  ACCENT_COLOR_VERY_LIGHT,
  FONT_SIZE_LARGE,
} from '@/styles/const';

const FONT_SIZE = FONT_SIZE_LARGE - 2;

type Props = {
  message: string;
  onSubmit: () => void;
  close: () => void;
};
export const ModalContent = ({message, onSubmit, close}: Props) => {
  return (
    <View px={6} py={4}>
      <Text textAlign="center" fontSize={FONT_SIZE} fontWeight={400} mb={10}>
        {message}
      </Text>
      <HStack justifyContent="center">
        <Button.Group>
          <Button
            onPress={onSubmit}
            bgColor={ACCENT_COLOR}
            _text={styles.yesButton_text}
            _pressed={styles.yesButton_pressed}>
            はい
          </Button>
          <Button
            onPress={close}
            bgColor="white"
            _text={styles.noButton_text}
            _pressed={styles.noButton_pressed}>
            いいえ
          </Button>
        </Button.Group>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  yesButton_pressed: {
    backgroundColor: ACCENT_COLOR_HEAVY,
  },
  yesButton_text: {
    fontSize: FONT_SIZE,
  },
  noButton_pressed: {
    backgroundColor: ACCENT_COLOR_VERY_LIGHT,
  },
  noButton_text: {
    color: ACCENT_COLOR,
    fontSize: FONT_SIZE,
  },
});
