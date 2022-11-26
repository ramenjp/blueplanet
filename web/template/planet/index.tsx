import { Box, Text, Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ProfileCard } from "../../component/Friends/profileCard";
import firstPlanet from "../assets/planets/0.png";
import secondPlanet from "../assets/planets/1.png";
import thirdPlanet from "../assets/planets/2.png";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

type Props = {
  balance: number;
};

const getBalanceOfSBT = () => {};
const Model = dynamic(() => import("../../component/Planet3D") as any);
export const Planet: React.FC<Props> = (props) => {
  return (
    <Box
      backgroundImage="/planet-background.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      padding="40px"
    >
      <Text fontSize="30px" color="white" fontWeight="bold">
        SBTs: {props.balance}
      </Text>
      <Text fontSize="24px" color="white" fontWeight="bold">
        Planet Lv: MAX
      </Text>
      <Text
        marginTop="24px"
        fontSize="24px"
        color="white"
        fontWeight="bold"
        borderBottom="1px solid"
        display="inline-block"
        cursor="pointer"
        _hover={{ color: "#d4d3d3" }}
      >
        <Link href="/friends">{"< "} Back to Friend List</Link>
      </Text>
      <Box width="80%" height="80%" margin="0 auto">
        <Canvas style={{ width: "100%", height: "600px" }}>
          <OrbitControls />
          <Model />
          <Stage />
        </Canvas>
      </Box>
      {/* <Box
        width="50%"
        height="50%"
        maxWidth="700px"
        maxHeight="700px"
        margin="0 auto"
      >
        {props.balance < 1 ? (
          <Image src="/planets/0.png" />
        ) : props.balance < 2 ? (
          <Image src="/planets/1.png" />
        ) : props.balance >= 2 ? (
          <Image src="/planets/2.png" />
        ) : null}
      </Box> */}
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box style={{ display: "flex" }}>
          <Box
            style={{
              backgroundColor: "#767474",
              width: "68px",
              height: "68px",
              borderRadius: "28px",
              padding: "8px",
            }}
          >
            <Image src="/icon/share.png" width="30px" />
            <p style={{ color: "white", fontWeight: "bold" }}>Share</p>
          </Box>
          <Box
            style={{
              marginLeft: "16px",
              backgroundColor: "#767474",
              width: "68px",
              height: "68px",
              borderRadius: "28px",
              padding: "8px",
            }}
          >
            <Image src="/icon/friends.png" />
            <p style={{ color: "white", fontWeight: "bold" }}>Friends</p>
          </Box>
          <Box
            style={{
              marginLeft: "16px",
              backgroundColor: "#767474",
              width: "68px",
              height: "68px",
              borderRadius: "28px",
              padding: "8px",
            }}
          >
            <Image src="/icon/edit.png" />
            <p style={{ color: "white", fontWeight: "bold" }}>Edit</p>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          background="rgba(255, 255, 255, 0.3)"
          width="320px"
          height="104px"
          borderRadius="28px"
          padding="8px"
          fontSize="22px"
          color="white"
          fontWeight="bold"
          onClick={getBalanceOfSBT}
          textAlign="center"
        >
          Check My SBT
          <br />
          Number of SBT is {props.balance}
        </Box>
      </Box>
    </Box>
  );
};

export default Planet;
