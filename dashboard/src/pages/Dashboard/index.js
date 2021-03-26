import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import CardOverview from "../../Components/Cards/CardOverview";
import SidebarNav from "../../Components/Sidebar";
import Table from "../Table";
import Invest from "../Invest";
import RequestMoney from "../RequestMoney";
import TransactionLog from "../TransactionLog";
import Settings from "../Settings";


// styles
import { Flex, Grid } from "@chakra-ui/react";

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
        ml={[null, null, "4.8em"]}
        justify="center"
      >
        <BrowserRouter>
          <Flex justify="center" mb={[8, 8, null]}>
            <SidebarNav />
          </Flex>
          <Switch>
            <Route path="/dashboard" exact component={Table} />
            <Route path="/invest" component={Invest} />
            <Route path="/requestMoney" component={RequestMoney} />
            <Route path="/transaction" component={TransactionLog} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
      </Flex>
    </Grid>
  );
};

export default AppDashboard;
