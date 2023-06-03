import React from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "native-base";

import { BORDER_RADIUS, MAIN_COLOR } from "@/styles/const";

type Props = {
  onPress: () => void;
  h?: number | string;
};
export const AddButton = ({ onPress, h = 40 }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: MAIN_COLOR,
        justifyContent: "center", // テキストを縦中央に配置するために追加
        alignItems: "center", // テキストを横中央に配置するために追加
        borderRadius: BORDER_RADIUS,
        height: h,
      }}
    >
      <Text
        w={16}
        textAlign="center"
        color="black"
        fontWeight="bold"
        fontSize={16}
      >
        追加
      </Text>
    </TouchableOpacity>
  );
};
