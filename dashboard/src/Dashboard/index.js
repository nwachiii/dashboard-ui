import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import CardOverview from "./CardOverview";
import SidebarNav from "./Sidebar";

const AppDashboard = () => {
  return (
    <Grid bg="gray.50">
      <Flex justify="center" h="100%" pt="60px">
        <CardOverview />
      </Flex>
      <Flex>
        <SidebarNav />
      </Flex>
    </Grid>
  );
};

export default AppDashboard;
