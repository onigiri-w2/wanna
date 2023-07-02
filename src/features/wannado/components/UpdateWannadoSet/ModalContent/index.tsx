import {Text, HStack, Button} from 'native-base';

import {
  ACCENT_COLOR,
  FONT_SIZE_NORMAL,
  ACCENT_COLOR_HEAVY,
  ACCENT_COLOR_VERY_LIGHT,
} from '@/styles/const';

type Props = {
  message: string;
  onSubmit: () => void;
  close: () => void;
};
export const ModalContent = ({message, onSubmit, close}: Props) => {
  return (
    <>
      <Text textAlign="center" fontSize={FONT_SIZE_NORMAL} mb={6}>
        {message}
      </Text>
      <HStack justifyContent="center">
        <Button.Group>
          <Button
            onPress={onSubmit}
            bgColor={ACCENT_COLOR}
            _pressed={{bgColor: ACCENT_COLOR_HEAVY}}>
            はい
          </Button>
          <Button
            onPress={close}
            bgColor="white"
            _text={{color: ACCENT_COLOR}}
            _pressed={{bgColor: ACCENT_COLOR_VERY_LIGHT}}>
            いいえ
          </Button>
        </Button.Group>
      </HStack>
    </>
  );
};
