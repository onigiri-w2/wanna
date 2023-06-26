import React from 'react';

import Clipboard from '@react-native-clipboard/clipboard';
import {View} from 'native-base';

import {Pasted} from './Pasted';
import {Paster} from './Paster';

type Props = {
  onAdd: (title: string, url: string) => void;
};
export const LinkAddr = ({onAdd}: Props) => {
  const [url, setUrl] = React.useState('');
  const [isPasted, setIsPasted] = React.useState(false);

  const handlePressPaste = async () => {
    const url = await Clipboard.getString();
    setUrl(url);
    setIsPasted(true);
  };
  const handleAdd = (title: string, url: string) => {
    onAdd(title, url);
    setUrl('');
    setIsPasted(false);
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
