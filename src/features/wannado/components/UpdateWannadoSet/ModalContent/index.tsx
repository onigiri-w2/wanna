import {Text, HStack, Button} from 'native-base';

import {FONT_SIZE_NORMAL} from '@/styles/const';

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
          <Button onPress={onSubmit}>はい</Button>
          <Button onPress={close} variant="ghost">
            いいえ
          </Button>
        </Button.Group>
      </HStack>
    </>
  );
};
