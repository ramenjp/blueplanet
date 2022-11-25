import * as React from "react";
import { Box, Text, Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BorderButton } from "../../component/BorderButton";
import { Planet as PlanetTemplate } from "../../template/planet";

export default function Home() {
  return <PlanetTemplate balance={2} />;
}
