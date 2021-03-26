import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineDashboard/>,
  },
  {
    title: "Invest",
    path: "/invest",
    icon: <IoIcons.IoIosPaper/>,
  },
  {
    title: "Request Money",
    path: "/requestMoney",
    icon: <FaIcons.FaCartPlus/>,
  },
  {
    title: "Transaction Log",
    path: "/transaction",
    icon: <IoIcons.IoMdPeople/>,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdPeople/>,
  }
];
