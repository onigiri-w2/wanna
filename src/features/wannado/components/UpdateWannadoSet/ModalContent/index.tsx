import {Text, HStack, Button} from 'native-base';

type Props = {
  message: string;
  onSubmit: () => void;
  close: () => void;
};
export const ModalContent = ({message, onSubmit, close}: Props) => {
  return (
    <>
      <Text textAlign="center" fontSize={16} mb={6}>
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
