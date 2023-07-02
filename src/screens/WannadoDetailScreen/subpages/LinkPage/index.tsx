import {View} from 'native-base';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {LinkList} from '@/features/link/components/LinkList';
import {useShow} from '@/hooks/useShow';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {isShow, show, hide} = useShow();
  const handleAdd = async (title: string, url: string) => {
    hide();
  };

  return (
    <View flex={1} px={4} pt={4}>
      <LinkList />
      <Buttons onPressAdd={show} />
      <Modal isOpen={isShow} close={hide}>
        <LinkAddr onAdd={handleAdd} />
      </Modal>
    </View>
  );
};
