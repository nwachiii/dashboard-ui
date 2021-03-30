import React, { useState } from "react";
import {
  Flex,
  VStack,
  Input,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";

const InvestPage = () => {
      const [value, setValue] = useState("");
      const handleChange = (event) => setValue(event.target.value);
      return (
        <Flex direction="column" color="white" bg="blue.800" w="100%">
          <Flex py={8} h="35px" bg="tomato" justify="center" align="center">
            <Text fontSize="30px">Invest</Text>
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
                placeholder="How much do you want to Invest ?"
                size="lg"
              />
              <Select color="lightgray" placeholder="Select a Plan" size="lg">
                <option variant="fill" value="option1">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
                <option value="Diamond">Diamond</option>
              </Select>
            </VStack>
            <Button color="white" bg="tomato" w="70%">
              INVEST
            </Button>
          </Flex>
        </Flex>
      );
};

export default InvestPage;
