import { Box, Text, Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BorderButton } from "../component/BorderButton";
import { GraduationButton } from "../component/GraduationButton";
import { useEthers } from "@usedapp/core";

export default function Home() {
  const { account, activateBrowserWallet } = useEthers();

  return (
    <Box
      backgroundImage="/wrappybackground.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100%"
      width="100%"
    >
      <Box className="header" padding="16px 32px">
        <Flex justifyContent="space-between">
          <Image
            src="/wrappy.png"
            alt="logo"
            maxWidth="120px"
            maxHeight="22px"
          />
          <Box>
            <Flex>
              <Text color="white" fontSize="24px" fontWeight="bold">
                About
              </Text>
              <Text
                color="white"
                fontSize="24px"
                fontWeight="bold"
                marginLeft="30px"
              >
                FAQ
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box padding="100px 80px">
        <Text
          maxWidth="800px"
          textAlign="left"
          marginBottom="0"
          fontSize="72px"
          fontWeight="bold"
          color="white"
          padding="8px"
          background="-webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70)"
          marginTop="40px"
          bgGradient="linear-gradient(82.38deg, #E75413 3.3%, #C624FF 50.69%, #0CB4FF 98.08%)"
          bgClip="text"
        >
          Treasure your friendship on-chain
        </Text>
        <Text
          textAlign="left"
          fontSize="30px"
          color="white"
          padding="8px"
          marginTop="20px"
        >
          Flourish your planet <br />
          by interacting with your friends on-chain
        </Text>
        <Flex
          justifyContent="left"
          alignItems="center"
          maxWidth="800px"
          marginTop="80px"
        >
          <Box maxWidth="320px">
            <BorderButton
              text="Connect Wallet"
              onClick={activateBrowserWallet}
            />
          </Box>
          <Box maxWidth="320px" marginLeft="40px">
            <Link href="/planet">
              <GraduationButton text="View My Planet" />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
