import React from "react";
import { Center, Flex, VStack } from "@chakra-ui/react";

const Card = ({ children, minW }) => {
  const cardShadow = "1px 2px 20px 10px rgba(0,0,0,0.04)";
  return (
    <Flex
      mx={['auto', 'auto', 4]}
      my={3}
      px="5"
      cursor="pointer"
      flex="1"
      h={190}
      minW={minW}
      maxW={250}
      borderRadius="md"
      shadow={cardShadow}
      bg="white"
      borderWidth="1px"
      borderColor="tomato"
      _hover={{ fontWeight: "semibold", bg: "tomato", color: "white" }}
      _groupHover={{ color: "tomato" }}
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6}>{children}</VStack>
    </Flex>
  );
};
export default Card