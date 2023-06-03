import React from "react";

import { Box } from "native-base";

import { BORDER_GRAY_COLOR, BORDER_RADIUS } from "@/styles/const";
import { WannaDo as WannaDoType } from "@/types";

import { useWannadoAllContext } from "../../providers/WannaDoAllProvider";
import { WannaDo } from "../WannaDo";

type Props = {
  onPress: (wannaDo: WannaDoType) => void;
};

export const WannaDoneList = ({ onPress }: Props) => {
  const { wannaDoAll } = useWannadoAllContext();
  return (
    <Box bg="white" borderRadius={BORDER_RADIUS}>
      {wannaDoAll.map((value) => {
        return (
          <Box
            key={value.id}
            borderBottomWidth={1}
            borderBottomColor={BORDER_GRAY_COLOR}
          >
            <WannaDo onPress={onPress} wannaDo={value} />
          </Box>
        );
      })}
    </Box>
  );
};
