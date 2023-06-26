import {Modal as ModalRN, View, StyleSheet} from 'react-native';

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};
export const Modal = ({isOpen, close, children}: Props) => {
  return (
    <ModalRN
      animationType="fade"
      transparent
      visible={isOpen}
      onRequestClose={close}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </ModalRN>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
});
