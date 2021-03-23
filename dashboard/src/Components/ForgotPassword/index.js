import React from 'react'
import {Box, Button, Center, Flex, FormControl, Heading, Input, } from '@chakra-ui/react'

const ForgotPassword = () => {
    return (
      <Flex align="center" justify="center" bg="gray.50" h="100vh">
        <Box
          w={["90vw", '70vw', '35vw']}
          boxShadow="dark-lg"
          p={[4, 8, 10]}
          s
          rounded="md"
          bg="white"
        >
          <Heading size="lg" mb={5} textAlign="center">
            Reset Password
          </Heading>
          <FormControl id="email" isRequired>
            <Input mt={3} type="email" placeholder="Enter your email address" />
            <Center>
              <Button mt={4} colorScheme="blue" type="submit" sz="xl">
                Reset Password
              </Button>
            </Center>
          </FormControl>
        </Box>
      </Flex>
    );
}

export default ForgotPassword
