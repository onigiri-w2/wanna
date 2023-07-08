import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ACCENT_COLOR, BORDER_CIRCLE_RADIUS} from '@/styles/const';

import {useAddEditorShowContext} from '../../providers/AddEditorShowProvider';
import {useCompletedShowContext} from '../../providers/CompletedShowProvider';

export const Buttons = () => {
  const {showModal: openEditor} = useAddEditorShowContext();
  const {showModal: openCompletedTodos} = useCompletedShowContext();
  return (
    <Box style={styles.buttonView} alignItems="center">
      <TouchableOpacity onPress={openCompletedTodos}>
        <Box
          mb={4}
          p={2}
          background="white"
          borderWidth={1}
          borderRadius={BORDER_CIRCLE_RADIUS}>
          <Ionicons name="md-checkmark-done" size={24} />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={openEditor}>
        <AntDesign name="pluscircle" size={56} color={ACCENT_COLOR} />
      </TouchableOpacity>
    </Box>
  );
};

export const DoneButton = () => {
  const {isModalVisible, showModal, hideModal} = useCompletedShowContext();
  const handlePress = () => {
    if (isModalVisible) {
      hideModal();
    } else {
      showModal();
    }
  };
  return (
    <Box style={styles.doneButtonView}>
      <TouchableOpacity onPress={handlePress}>
        <Box
          mb={4}
          p={2}
          background="white"
          borderWidth={1}
          borderColor={isModalVisible ? ACCENT_COLOR : 'black'}
          borderRadius={BORDER_CIRCLE_RADIUS}
          bg={isModalVisible ? ACCENT_COLOR : 'white'}>
          <Ionicons
            name="md-checkmark-done"
            size={24}
            color={isModalVisible ? 'white' : 'black'}
          />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export const AddButton = () => {
  const {showModal} = useAddEditorShowContext();
  return (
    <Box style={styles.addButtonView}>
      <TouchableOpacity onPress={showModal}>
        <AntDesign name="pluscircle" size={56} color={ACCENT_COLOR} />
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
  },
  doneButtonView: {
    position: 'absolute',
    bottom: 74,
    right: 27,
    zIndex: 2,
  },
  addButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
  },
});
