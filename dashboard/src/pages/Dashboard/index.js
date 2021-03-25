import React from "react";
import { Divider, Flex, Grid } from "@chakra-ui/react";
import CardOverview from "./CardOverview";
import SidebarNav from "../../Components/Sidebar";
import Table from "./Table";
import "./Table/Table.scss";
import userData from '../../Components/userData'


const AppDashboard = () => {
  return (
    <Grid bg="gray.50" w="100%">
      {/* Cards below */}
      <Flex justify="center" h="100%" pt="60px" ml={["unset", 16]}>
        <CardOverview />
      </Flex>
      {/* Table area below*/}
      <Flex
        direction={["column", "row", "row"]}
        wrap="wrap"
        mt={[12, null, null]}
        ml={[null,null, '4.8em']}
        justify="center"
      >
        <Flex justify="center" mb={[8, 8, null]}>
          <SidebarNav />
        </Flex>
        <Flex justify="center" ml={[null, null, 8]}>
          <Table
            tableData={userData}
            headingColumns={[
              "Plan",
              "Deposit",
              "Withdraw",
              "Maturity Date",
              "Status",
              "Payment status",
            ]}
            title="User data"
          />
        </Flex>
      </Flex>
    </Grid>
  );
};

export default AppDashboard;
