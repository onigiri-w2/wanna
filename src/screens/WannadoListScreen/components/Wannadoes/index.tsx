import {StyleSheet, View} from 'react-native';

import {WannadoUncompletedList} from '@/features/wannado/components/WannadoUncompletedList';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

import {AddWannadoEditor} from '../AddWannadoEditor';
import {Buttons} from '../Buttons';

export const Wannadoes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <WannadoUncompletedList />
        <Buttons />
      </View>
      <AddWannadoEditor />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_GRAY_COLOR,
  },
  view: {
    paddingHorizontal: PAGE_BODY_PADDING,
    flex: 1,
  },
});
