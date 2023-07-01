import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {ACCENT_COLOR} from '@/styles/const';

type Props = {
  onPressAdd: () => void;
};
export const Buttons = ({onPressAdd}: Props) => {
  return (
    <Box style={styles.buttonView} alignItems="center">
      <TouchableOpacity onPress={onPressAdd}>
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
});
