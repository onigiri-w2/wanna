import {useNavigation, NavigationProp} from '@react-navigation/native';

import {RootNavParamList} from '@/navigations/root';

export const useRootNavigator = () => {
  const navigation = useNavigation<NavigationProp<RootNavParamList>>();

  function navigateToWannadoDetail(wannadoId: string) {
    navigation.navigate('WannadoDetailPage', {wannadoId});
  }

  function navigateToSettings() {
    navigation.navigate('SettingsPage');
  }

  function navigateToWannadoList() {
    navigation.navigate('WannadoListPage');
  }

  function navigateToWannadoCompletedList() {
    navigation.navigate('WannadoCompletedListPage');
  }

  return {
    navigateToWannadoDetail,
    navigateToSettings,
    navigateToWannadoList,
    navigateToWannadoCompletedList,
  };
};
