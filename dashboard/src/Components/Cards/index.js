import React from "react";
import { Center, Flex, VStack } from "@chakra-ui/react";

const Card = ({children}) => {
   const cardShadow = "1px 2px 20px 10px rgba(0,0,0,0.04)";
  return (
    <Flex
      m="2"
      px="5"
      cursor="pointer"
      flex="1"
      h={250}
      minW={280}
      maxW={280}
      borderRadius="md"
      shadow={cardShadow}
      bg="white"
      borderWidth="1px"
      borderColor="tomato"
      _hover={{ fontWeight: "semibold", bg: 'tomato', color: 'white'}}
      _groupHover={{ color: "tomato",  }}
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6}>{children}</VStack>
    </Flex>
  );}
export default Card