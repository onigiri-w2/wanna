import {StyleSheet} from 'react-native';

import {MAIN_COLOR, PAGE_HEADER_HEIGHT} from '@/styles/const';

export const styles = StyleSheet.create({
  titleEmoji: {
    position: 'absolute',
    top: PAGE_HEADER_HEIGHT,
    left: 0,
    width: '100%',
    zIndex: 2,
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: MAIN_COLOR,
  },
  updator: {
    position: 'absolute',
    top: PAGE_HEADER_HEIGHT,
    left: 0,
    width: '100%',
    zIndex: 2,
    display: 'none',
  },
  showUpdator: {
    display: 'flex',
  },
});
