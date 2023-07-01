import React from 'react';

import Clipboard from '@react-native-clipboard/clipboard';
import {View} from 'native-base';
import {useRecoilValue} from 'recoil';

import * as usecase from '@/domain/usecase/link';
import {
  activeWannadoIdState,
  activeWannadoActions,
} from '@/recoil/states/activeWannado';

import {Pasted} from './Pasted';
import {Paster} from './Paster';

type Props = {
  onAdd: (title: string, url: string) => void;
};
export const LinkAddr = ({onAdd}: Props) => {
  const activeWannadoId = useRecoilValue(activeWannadoIdState);
  const [url, setUrl] = React.useState('');
  const [isPasted, setIsPasted] = React.useState(false);

  const handlePressPaste = async () => {
    const url = await Clipboard.getString();
    setUrl(url);
    setIsPasted(true);
  };

  const handleAdd = async (title: string, url: string) => {
    const newLink = await usecase.createLink(activeWannadoId, title, url);
    if (newLink) activeWannadoActions.addLink(newLink);
    setUrl('');
    setIsPasted(false);
    onAdd(title, url);
  };

  return (
    <View>
      {isPasted ? (
        <Pasted url={url} onAdd={handleAdd} />
      ) : (
        <Paster onPress={handlePressPaste} />
      )}
    </View>
  );
};
