import React from "react";

import { HStack, Text } from "native-base";

import {
  FONT_SIZE_PAGE_HEADER,
  FONT_WEIGHT_PAGE_HEADER,
  PAGE_HEADER_COLOR,
  PAGE_HEADER_HEIGHT,
  PAGE_HEADER_PADDING,
} from "@/styles/const";

import { useWannaDoneModalContext } from "../../providers";

import { DoneIcon } from "./components/DoneIcon";
import { SettingsIcon } from "./components/SettingsIcon";

export const Header = () => {
  const { isModalVisible } = useWannaDoneModalContext();
  return (
    <HStack
      h={`${PAGE_HEADER_HEIGHT}px`}
      px={`${PAGE_HEADER_PADDING}px`}
      justifyContent="center"
      alignItems="center"
      bg={PAGE_HEADER_COLOR}
    >
      <DoneIcon />

      <Text
        marginX="auto"
        fontSize={FONT_SIZE_PAGE_HEADER}
        fontWeight={FONT_WEIGHT_PAGE_HEADER}
      >
        {isModalVisible ? "やったこと" : "やりたいこと"}
      </Text>
      <SettingsIcon />
    </HStack>
  );
};
