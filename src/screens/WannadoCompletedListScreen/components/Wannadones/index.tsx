import {StyleSheet, View} from 'react-native';

import {WannadoOverview} from '@/domain/types';
import {WannadoCompletedList} from '@/features/wannado/components/WannadoCompletedList';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

export const Wannadones = () => {
  const {navigateToWannadoDetail} = useRootNavigator();

  const handlePress = (wannado: WannadoOverview) => {
    navigateToWannadoDetail(wannado.id);
  };

  return (
    <View style={styles.view}>
      <WannadoCompletedList onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_GRAY_COLOR,
  },
  view: {
    flex: 1,
    paddingHorizontal: PAGE_BODY_PADDING,
  },
});
