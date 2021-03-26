import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import {
  Circle,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

const SidebarNav = () => {
  return (
      <VStack spacing={6}>
        <Flex
          pl={4}
          pr="3.5em"
          py={8}
          w={280}
          bg="blue.800"
          color="white"
          borderRadius="md"
        >
          <List spacing={3}>
            {SidebarData.map((item, index) => {
              return (
                <ListItem key={index} fontSize="18px">
                  <Link to={item.path}>
                    <ListIcon
                      fontSize="24px"
                      color="tomato">{item.icon}</ListIcon>
                    {item.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Flex>

        <VStack
          mt="5em"
          py={8}
          bg="blue.800"
          w={280}
          color="white"
          borderRadius="md"
          spacing={4}
        >
          <Circle size="60px" bg="tomato" color="white">
            <FaIcons.FaHandsHelping fontSize="45px" />
          </Circle>
          <Text fontSize="24px">Need Help ?</Text>
        </VStack>
      </VStack>
  );
};

export default SidebarNav;
