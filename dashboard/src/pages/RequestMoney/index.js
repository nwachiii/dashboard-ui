import React, {useState} from "react";
import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";

const RequestMoney = () => {
      const [value, setValue] = useState("");
      const handleChange = (event) => setValue(event.target.value);
  return (
    <Flex direction="column" color="white" bg="blue.800" w="100%">
      <Flex py={8} h="35px" bg="tomato" justify="center" align="center">
        <Text fontSize="25px">Request Money</Text>
      </Flex>
      <Flex
        direction="column"
        px={8}
        pb={6}
        justify="space-evenly"
        align="center"
        w="100%"
        h="80%"
      >
        <VStack spacing={10} w="90%" my={8}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="How much do you want to withdraw ?"
            size="lg"
          />
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Please enter your wallet address"
            size="lg"
          />
        </VStack>
        <Button color="white" bg="tomato" w="70%">
          Withdraw
        </Button>
      </Flex>
    </Flex>
  );
};

export default RequestMoney;
