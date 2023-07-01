import {StyleSheet, View} from 'react-native';

import {BottomSheetModal} from '@/components/BottomSheetModal';
import {WannadoOverview} from '@/domain/types';
import {WannadoCompletedList} from '@/features/wannado/components/WannadoCompletedList';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

import {useWannadoneModalContext} from '../../providers/WannadoneModalProvider';

export const Wannadones = () => {
  const {isModalVisible, hideModal} = useWannadoneModalContext();
  const {navigateToWannadoDetail} = useRootNavigator();

  const handlePress = (wannado: WannadoOverview) => {
    navigateToWannadoDetail(wannado.id);
  };

  return (
    <BottomSheetModal isShow={isModalVisible} onClose={hideModal}>
      <View style={styles.view}>
        <WannadoCompletedList onPress={handlePress} />
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_GRAY_COLOR,
  },
  view: {
    flex: 1,
    padding: PAGE_BODY_PADDING,
  },
});
