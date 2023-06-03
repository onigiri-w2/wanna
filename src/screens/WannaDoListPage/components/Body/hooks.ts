import {useNavigation, NavigationProp} from '@react-navigation/native';

import {Wannado} from '@/domain/entity/wannado';
import {RootNavParamList} from '@/navigations';

export const useBody = () => {
  const navigation = useNavigation<NavigationProp<RootNavParamList>>();
  function handlePress(wannado: Wannado) {
    navigation.navigate('WannaDoDetailPage', {wannado});
  }

  return {handlePress};
};
