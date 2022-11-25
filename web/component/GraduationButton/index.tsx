import * as React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  onClick?: (arg?: any) => any;
  text: string;
  marginTop?: number;
  type?: "submit" | "button";
};

export const GraduationButton = (props: Props) => {
  return (
    <Button
      type={props.type === "submit" ? "submit" : "button"}
      onClick={props.onClick}
      as="button"
      height="46px"
      width="100%"
      color="white"
      marginTop={props.marginTop ?? 0}
      fontWeight="bold"
      _hover={{
        bgGradient: "linear(to-r, #cb4810, #ac1de0, #089de2)",
      }}
      borderRadius="30px"
      bgGradient="linear(to-r, #E75413, #C624FF, #0CB4FF)"
      _active={{
        transform: "scale(0.96)",
      }}
    >
      <Text fontSize="18px" fontWeight="extrabold" align="center">
        {props.text}
      </Text>
    </Button>
  );
};
