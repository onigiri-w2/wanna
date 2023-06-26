import React from 'react';

import {VStack} from 'native-base';

import {Complete} from './Complete';
import {Delete} from './Delete';
import {Uncomplete} from './Uncomplete';

type Props = {
  wannadoId: string;
  color?: string;
  onUpdated: () => void;
  isCompleted: boolean;
};
export const UpdateWannadoSet = ({
  wannadoId,
  onUpdated,
  isCompleted = false,
}: Props) => {
  return (
    <VStack space={2}>
      <Delete wannadoId={wannadoId} onDelete={onUpdated} />
      {isCompleted ? (
        <Uncomplete wannadoId={wannadoId} onUncomplete={onUpdated} />
      ) : (
        <Complete wannadoId={wannadoId} onComplete={onUpdated} />
      )}
    </VStack>
  );
};
