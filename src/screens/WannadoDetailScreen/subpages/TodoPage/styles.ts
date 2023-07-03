import {StyleSheet} from 'react-native';

import {PAGE_BODY_PADDING} from '@/styles/const';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todolist: {
    paddingHorizontal: PAGE_BODY_PADDING,
  },
  buttonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
  },
});
