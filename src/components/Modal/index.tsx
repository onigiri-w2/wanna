import {Modal as ModalNB, Box} from 'native-base';

import {BORDER_RADIUS} from '@/styles/const';

type Props = {
  isOpen: boolean;
  close: () => void;
  wPer?: string;
  children: React.ReactNode;
};
export const Modal = ({isOpen, close, children, wPer = '90%'}: Props) => {
  return (
    <ModalNB isOpen={isOpen} onClose={close} avoidKeyboard>
      <Box w={wPer} p={4} bg="white" borderRadius={BORDER_RADIUS}>
        {children}
      </Box>
    </ModalNB>
  );
};
