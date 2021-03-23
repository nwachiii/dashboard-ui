import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import {
  Circle,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../Components/Cards";

const SidebarNav = () => {
  return (
    <VStack spacing={6}>
      <Flex
        pl={4}
        pr="3.5em"
        ml="9.5em"
        mt="5em"
        py={8}
        w={280}
        bg="blue.800"
        color="white"
        borderRadius="md"
      >
        <List spacing={3}>
          <ListItem fontSize="22px">
            <ListIcon as={AiOutlineDashboard} color="tomato" />
            Dashboard
          </ListItem>
          <ListItem fontSize="22px">
            <ListIcon as={AiOutlineDashboard} color="tomato" />
            Invest
          </ListItem>
          <ListItem fontSize="22px">
            <ListIcon as={AiOutlineDashboard} color="tomato" />
            Request Money
          </ListItem>
          <ListItem fontSize="22px">
            <ListIcon as={AiOutlineDashboard} color="tomato" />
            Transaction Log
          </ListItem>
          <ListItem fontSize="22px">
            <ListIcon as={AiOutlineDashboard} color="tomato" />
            Settings
          </ListItem>
        </List>
      </Flex>

      <VStack
        ml="9.5em"
        mt="5em"
        py={8}
        bg="blue.800"
        w={280}
        color="white"
        borderRadius="md"
        spacing={4}
      >
        <Circle size="60px" bg="tomato" color="white">
          <FaHandsHelping fontSize="45px" />
        </Circle>
        <Text fontSize='24px'>Need Help ?</Text>
      </VStack>
    </VStack>
  );
};

export default SidebarNav;
