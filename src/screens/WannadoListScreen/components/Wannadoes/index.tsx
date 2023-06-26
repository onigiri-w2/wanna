import {StyleSheet, View} from 'react-native';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {WannadoSerialized} from '@/domain/model/entity/wannado';
import {AddWannadoForm} from '@/features/wannado/components/AddWannadoForm';
import {WannadoUncompletedList} from '@/features/wannado/components/WannadoUncompletedList';
import {useRootNavigator} from '@/navigations/hooks/useNavigator';
import {useWannadoAllContext} from '@/providers/wannadoAll';
import {BACKGROUND_GRAY_COLOR, PAGE_BODY_PADDING} from '@/styles/const';

export const Wannadoes = () => {
  const {wannadoList, notifyReload} = useWannadoAllContext();
  const {navigateToWannadoDetail} = useRootNavigator();

  const handlePress = (wannado: WannadoSerialized) => {
    navigateToWannadoDetail(wannado.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <WannadoUncompletedList
          onPress={handlePress}
          wannadoList={wannadoList}
        />
      </View>
      <KeyboardAvoidingView>
        <AddWannadoForm onSubmit={notifyReload} />
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
    padding: PAGE_BODY_PADDING,
    flex: 1,
  },
});
