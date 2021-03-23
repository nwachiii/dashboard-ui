import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  Heading,
  IconButton,
  Center,
} from "@chakra-ui/react";

const ConfirmPassword = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
   const [value, setValue] = React.useState("");
   const handleChange = (event) => setValue(event.target.value);

  return (
    <Flex align="center" justify="center" bg="gray.50" h="100vh">
      <Box
        w={["90vw", "70vw", "35vw"]}
        boxShadow="dark-lg"
        p={[4, 8, 10]}
        rounded="md"
        bg="white"
      >
        <Center>
          <IconButton
            variant="outline"
            colorScheme="blue"
            fontSize="20px"
            icon={<FiLock />}
          />
        </Center>

        <Heading size="lg" mt={4} textAlign="center">
          Confirm Password
        </Heading>
        <InputGroup size="md" mt={8}>
          <Input
            pr="4.5rem"
            value={value}
            onChange={handleChange}
            type={show ? "text" : "password"}
            placeholder="Enter new password"
          />
        </InputGroup>
        <InputGroup size="md" my={4}>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <Button mt={4} colorScheme="blue" type="submit" w="50%">
            Submit
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default ConfirmPassword;
