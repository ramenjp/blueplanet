import React, { ReactFragment, ReducerAction } from "react";
// import { useEthers } from "@usedapp/core";
// import { getContract } from "../ethers";
import { Box, Image, Text } from "@chakra-ui/react";
type Props = {
  name?: string;
  address?: string;
  imageUrl?: string;
  handle?: string;
};

export const ProfileCard: React.FC<Props> = (props) => {
  return (
    <Box>
      <Image
        src={props.imageUrl}
        alt="friendsIcon"
        maxWidth="100%"
        maxHeight="100%"
      />
      <Text fontWeight="bold" fontSize="16px" borderBottom="1px solid">
        {props.handle}
      </Text>
    </Box>
  );
};

export default ProfileCard;
