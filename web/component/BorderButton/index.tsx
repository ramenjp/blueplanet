import * as React from "react";
import { Text, Box, Image } from "@chakra-ui/react";

type Props = {
  onClick?: (arg?: any) => any;
  text: string;
  isTextColor?: boolean;
};

export const BorderButton: React.FC<Props> = (props) => {
  return (
    <Box
      width="100%"
      onClick={props.onClick}
      padding={1}
      borderRadius="30px"
      bgGradient="linear(to-r, #d44b11, #b420ea, #09a3ea)"
      _active={{
        transform: "scale(0.96)",
      }}
    >
      <Box
        margin="auto"
        paddingX={4}
        paddingY={2}
        borderRadius="26px"
        backgroundColor="#FFF"
        _hover={{ cursor: "pointer", backgroundColor: "#edebeb" }}
        overflow="hidden"
      >
        {props.isTextColor ? (
          <Text
            bgGradient="linear-gradient(82.38deg, #E75413 3.3%, #C624FF 50.69%, #0CB4FF 98.08%)"
            bgClip="text"
            fontSize="18px"
            fontWeight="extrabold"
            textAlign="center"
            cursor="pointer"
          >
            {props.text}
          </Text>
        ) : (
          <Text fontSize="18px" fontWeight="extrabold" align="center">
            {props.text}
          </Text>
        )}
      </Box>
    </Box>
  );
};
