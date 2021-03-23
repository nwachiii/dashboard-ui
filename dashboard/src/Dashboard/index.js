import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import CardOverview from "./CardOverview";

const AppDashboard = () => {
  return (
    <Flex align="center" justify="center" bg="gray.50" h="100vh">
      <Box
        w={["90vw", "90vw", "100vw"]}
        boxShadow="dark-lg"
        p={[4, 8, 10]}
        rounded="md"
        bg="white"
      >
        <CardOverview />
      </Box>
    </Flex>
  );
};

export default AppDashboard;
