import React, {useCallback} from 'react';

import {Editor} from '@/features/memo/components/Editor';

import {useNavigator} from '../../navigations/hooks/useNavigator';

export const MemoEditor = () => {
  const {navigateToMemoHome} = useNavigator();

  const handleBack = useCallback(() => {
    navigateToMemoHome();
  }, []);
  return <Editor onBack={handleBack} />;
};
