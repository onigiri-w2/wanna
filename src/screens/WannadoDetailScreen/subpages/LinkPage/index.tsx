import {View} from 'native-base';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {LinkList} from '@/features/link/components/LinkList';
import {useModal} from '@/hooks/useModal';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {isModalVisible, showModal, hideModal} = useModal();
  const handleAdd = async (title: string, url: string) => {
    hideModal();
  };

  return (
    <View flex={1} px={4} pt={4}>
      <LinkList />
      <Buttons onPressAdd={showModal} />
      <Modal isOpen={isModalVisible} close={hideModal}>
        <LinkAddr onAdd={handleAdd} />
      </Modal>
    </View>
  );
};
