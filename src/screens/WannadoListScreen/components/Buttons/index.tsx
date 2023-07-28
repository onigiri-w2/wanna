import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {ACCENT_COLOR} from '@/styles/const';

import {useAddEditorShowContext} from '../../providers/AddEditorShowProvider';

export const Buttons = () => {
  const {showModal: openEditor} = useAddEditorShowContext();

  return (
    <Box style={styles.buttonView} alignItems="center">
      <TouchableOpacity onPress={openEditor}>
        <AntDesign name="pluscircle" size={56} color={ACCENT_COLOR} />
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    position: 'absolute',
    bottom: 74,
    right: 20,
    zIndex: 2,
  },
});
