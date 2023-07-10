import React from 'react';

import {HStack, Box} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {KeyboardAvoidingView} from '@/components/KeyboardAvoidingView';
import {ACCENT_COLOR, BORDER_RADIUS} from '@/styles/const';

type Props = {
  onBack: () => void;
  onPressEdit: () => void;
  isEditable: boolean;
};
export const EditorToolBar = ({onBack, onPressEdit, isEditable}: Props) => {
  return (
    <KeyboardAvoidingView>
      <HStack
        p={2}
        justifyContent="space-between"
        alignItems="center"
        borderTopWidth={1}
        borderBottomWidth={1}
        borderColor="gray.500"
        bg="white">
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back-circle-sharp" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressEdit}>
          <Box
            bg={isEditable ? ACCENT_COLOR : 'white'}
            p={1}
            borderRadius={BORDER_RADIUS}
            borderWidth={1}
            borderColor={isEditable ? ACCENT_COLOR : 'black'}>
            <MaterialIcons
              name="edit"
              size={20}
              color={isEditable ? 'white' : 'black'}
            />
          </Box>
        </TouchableOpacity>
      </HStack>
    </KeyboardAvoidingView>
  );
};
