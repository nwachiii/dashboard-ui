import React from "react";
import { Flex } from "@chakra-ui/react";
import userData from "../../Components/userData";
import Table from "./Table";
import "./Table.scss";

const index = () => {
  return (
    <Flex justify="center" w={["95%", "95%", "100%"]}>
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
  );
};

export default index;
