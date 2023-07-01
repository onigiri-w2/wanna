import {StyleSheet} from 'react-native';

import {PAGE_BODY_PADDING} from '@/styles/const';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todolist: {
    padding: PAGE_BODY_PADDING,
    paddingBottom: 0,
  },
  buttonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
  },
});
