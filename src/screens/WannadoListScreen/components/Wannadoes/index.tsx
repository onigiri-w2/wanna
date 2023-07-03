import {StyleSheet, View} from 'react-native';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {WannadoOverview} from '@/domain/types';
import {AddWannadoForm} from '@/features/wannado/components/AddWannadoForm';
import {WannadoUncompletedList} from '@/features/wannado/components/WannadoUncompletedList';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

export const Wannadoes = () => {
  const {navigateToWannadoDetail} = useRootNavigator();

  const handlePress = (wannado: WannadoOverview) => {
    navigateToWannadoDetail(wannado.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <WannadoUncompletedList onPressEl={handlePress} />
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
