import {StyleSheet, View} from 'react-native';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {AddWannadoForm} from '@/features/wannado/components/AddWannadoForm';
import {WannadoUncompletedList} from '@/features/wannado/components/WannadoUncompletedList';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

export const Wannadoes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <WannadoUncompletedList />
      </View>
      <KeyboardAvoidingView>
        <AddWannadoForm />
      </KeyboardAvoidingView>
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
