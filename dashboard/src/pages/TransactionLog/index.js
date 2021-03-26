import React from 'react'
import { Flex, Text } from '@chakra-ui/react';

const TransactionLog = () => {
    return (
      <Flex direction="column" color="white" bg="blue.800" w="100%">
        <Flex py={8} h="35px" bg="tomato" justify="center" align="center">
          <Text fontSize="25px">Transaction Log</Text>
        </Flex>
      </Flex>
    );
}

export default TransactionLog

