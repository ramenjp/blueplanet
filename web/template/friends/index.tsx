import { Box, Text, Button, Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ProfileCard } from "../../component/Friends/profileCard";

type Props = {
  friends: any[];
};

export const Friends: React.FC<Props> = (props) => {
  return (
    <Box
      backgroundImage="/wrappybackground.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      minHeight="100vh"
      width="100%"
    >
      <Box padding="100px 80px">
        <Box
          backgroundColor="#E0E0E0"
          padding="20px"
          maxWidth="800px"
          borderRadius="24px"
          border="3px solid #0CB4FF"
        >
          <Flex flexWrap="wrap" justifyContent="space-between">
            {props.friends.map((friend) => {
              return (
                <Box
                  key={friend}
                  backgroundColor="white"
                  padding="20px 40px"
                  borderRadius="24px"
                  marginLeft="16px"
                  marginTop="16px"
                  cursor="pointer"
                  _hover={{ backgroundColor: "#ecebeb" }}
                >
                  <Box width="80px" height="120px" cursor="pointer">
                    <ProfileCard
                      name={friend.name}
                      handle={friend.handle}
                      address={friend.ownedBy}
                      imageUrl={
                        friend.picture
                          ? friend.picture.original.url.includes("ipfs://")
                            ? friend.picture.original.url.replace(
                                "ipfs://",
                                "https://ipfs.io/ipfs/"
                              )
                            : friend.picture.original.url
                          : "https://statics-mumbai-lens-staging.s3.eu-west-1.amazonaws.com/profile/QmVeEwimhwaebeHFDTVY3XNjFuaNUWuhv1ksNefnzeTKXH"
                      }
                    />
                  </Box>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
