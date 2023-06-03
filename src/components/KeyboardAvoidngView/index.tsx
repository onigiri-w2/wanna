import React from "react";
import {
  KeyboardAvoidingView as KeyboardAvoidingViewRN,
  Platform,
} from "react-native";

import { useKeyboardAvoidingOffset } from "./hooks";

type Props = {
  children: React.ReactNode;
};
export const KeyboardAvoidingView = ({ children }: Props) => {
  const offset = useKeyboardAvoidingOffset();

  return (
    <KeyboardAvoidingViewRN
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? offset : 0}
    >
      {children}
    </KeyboardAvoidingViewRN>
  );
};
