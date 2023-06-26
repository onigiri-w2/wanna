import {useCallback} from 'react';
import {ScrollView} from 'react-native';

import {VStack, View} from 'native-base';

import {Modal} from '@/components/Modal';
import {LinkAddr} from '@/features/link/components/LinkAddr';
import {LinkItem} from '@/features/link/components/LinkItem';
import {useLinkAll} from '@/features/link/hooks/useLinkAll';
import {useActiveWannadoContext} from '@/features/wannado/providers/ActiveWannadoProvider';
import {useModal} from '@/hooks/useModal';

import {Buttons} from './Buttons';

export const LinkPage = () => {
  const {wannado} = useActiveWannadoContext();
  const {linkList, addLink, deleteLink} = useLinkAll(
    wannado ? wannado.id : '',
    wannado ? wannado.links : [],
  );
  const {isModalVisible, showModal, hideModal} = useModal();
  const handlePressAdd = () => {
    showModal();
  };
  const handleAdd = (title: string, url: string) => {
    addLink(title, url);
    hideModal();
  };
  const handleDelete = useCallback((linkId: string) => {
    deleteLink(linkId);
  }, []);

  return (
    <View flex={1} px={4}>
      <ScrollView>
        <VStack space={4} mt={4} mb={8}>
          {linkList.map(link => (
            <LinkItem key={link.id} link={link} onPressDelete={handleDelete} />
          ))}
        </VStack>
      </ScrollView>
      <Buttons onPressAdd={handlePressAdd} />
      <Modal isOpen={isModalVisible} close={hideModal}>
        <LinkAddr onAdd={handleAdd} />
      </Modal>
    </View>
  );
};
