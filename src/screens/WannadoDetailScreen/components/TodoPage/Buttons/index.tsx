import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ACCENT_COLOR, BORDER_CIRCLE_RADIUS} from '@/styles/const';

type Props = {
  onPressAdd: () => void;
  onPressShowCompletedTodos: () => void;
};
export const Buttons = ({onPressAdd, onPressShowCompletedTodos}: Props) => {
  return (
    <Box style={styles.buttonView} alignItems="center">
      <TouchableOpacity onPress={onPressShowCompletedTodos}>
        <Box
          mb={4}
          p={2}
          background="white"
          borderWidth={1}
          borderRadius={BORDER_CIRCLE_RADIUS}>
          <Ionicons name="md-checkmark-done" size={24} />
        </Box>
      </TouchableOpacity>
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
