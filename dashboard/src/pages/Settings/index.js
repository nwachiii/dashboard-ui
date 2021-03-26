import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SettingsPage = () => {
    return (
      <Flex direction="column" color="white" bg="blue.800" w="100%">
        <Flex py={8} h="35px" bg="tomato" justify="center" align="center">
          <Text fontSize="25px">Settings</Text>
        </Flex>
      </Flex>
    );
}

export default SettingsPage
