import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {ACCENT_COLOR} from '@/styles/const';

import {useAddEditorShowContext} from '../../providers/AddEditorShowProvider';

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

// TODO: ボタンの位置は他の画面と同じなので、共通化してconstに抜き出した方が安全。
const styles = StyleSheet.create({
  addButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
  },
});
