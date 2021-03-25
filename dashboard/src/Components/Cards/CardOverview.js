import React from "react";
import { BiCoinStack, BiDollar, BiEuro } from "react-icons/bi";
import { Circle, Flex, Text } from "@chakra-ui/layout";
import Card from ".";
import { Avatar } from "@chakra-ui/avatar";

const CardOverview = () => {
  return (
    <Flex wrap="wrap" w="90%" justify="center" >
      <Card minW={[250, 250, 280]}>
        <Avatar
          mt={4}
          mb={-4}
          size="xl"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
        <Text fontSize="24px">Ryan Florence</Text>
      </Card>
      <Card minW={250}>
        <Circle size="60px" bg="tomato" color="white">
          <BiCoinStack fontSize="45px" />
        </Circle>
        <Text fontSize="24px">Balance: 12.5</Text>
      </Card>
      <Card minW={250}>
        <Circle size="60px" bg="tomato" color="white">
          <BiDollar fontSize="45px" />
        </Circle>
        <Text fontSize="24px">Bank Account</Text>
      </Card>
      <Card minW={250}>
        <Circle size="60px" bg="tomato" color="white">
          <BiEuro fontSize="45px" />
        </Circle>
        <Text fontSize="24px">Card Number</Text>
      </Card>
    </Flex>
  );
};

export default CardOverview;
