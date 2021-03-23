import React from 'react'
import { BiCoinStack, BiDollar, BiEuro } from "react-icons/bi";
import { Circle, Flex, Grid, Spacer, Text } from "@chakra-ui/layout";
import Card from '../Components/Cards';
import { Avatar } from '@chakra-ui/avatar';

const CardOverview = () => {
    return (
      <Flex wrap="wrap" w="100%" justify="center">
        <Card>
          <Avatar
            size="xl"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Text fontSize="24px">Ryan Florence</Text>
        </Card>
        <Card>
          <Circle size="60px" bg="tomato" color="white">
            <BiCoinStack fontSize="45px" />
          </Circle>
          <Text fontSize="24px">Balance: 12.5</Text>
        </Card>
        <Card>
          <Circle size="60px" bg="tomato" color="white">
            <BiDollar fontSize="45px" />
          </Circle>
          <Text fontSize="24px">Bank Account</Text>
        </Card>
        <Card>
          <Circle size="60px" bg="tomato" color="white">
            <BiEuro fontSize="45px" />
          </Circle>
          <Text fontSize="24px">Card Number</Text>
        </Card>
      </Flex>
    );
}

export default CardOverview
