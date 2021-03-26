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
import { Flex } from "@chakra-ui/react";

const AppDashboard = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      bg="gray.50"
      w="100%"
      h="100%"
      py={10}
    >
      {/* Cards below */}
      <Flex justify="center" h="100%" ml={[null, null, 16]}>
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
        <BrowserRouter basename="/dashboard">
          <Flex justify="center" mb={[8, 8, null]}>
            <SidebarNav />
          </Flex>
          <Flex
            justify="center"
            ml={[null, null, 8]}
            minW={["90vw", "90vw", 820]}
            minH="250px"
          >
            <Switch>
              <Route path="/" exact component={Table} />
              <Route path="/home" exact component={Table} />
              <Route path="/Invest" component={Invest} />
              <Route path="/requestMoney" component={RequestMoney} />
              <Route path="/transaction" component={TransactionLog} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Flex>
        </BrowserRouter>
      </Flex>
    </Flex>
  );
};

export default AppDashboard;
