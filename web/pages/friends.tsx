import * as React from "react";
import { Box, Text, Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BorderButton } from "../component/BorderButton";
import { Friends as FriendsTemplate } from "../template/friends";
import { getLensProfiles } from "../graphql/lens";

export default function Home() {
  const [friends, setFriends] = React.useState();
  React.useEffect(() => {
    (async () => {
      const data = await getLensProfiles();
      console.log("Lensdata :", data);
      setFriends(data);
    })();
  }, []);

  if (!friends) return <Box>Loading...</Box>;
  return <FriendsTemplate friends={friends} />;
}
