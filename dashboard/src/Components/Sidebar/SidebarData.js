import React from "react";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
         {
           title: "Dashboard",
           path: "/home",
           icon: <AiIcons.AiOutlineDashboard />,
         },
         {
           title: "Invest",
           path: "/Invest",
           icon: <IoIcons.IoIosPaper />,
         },
         {
           title: "Request Money",
           path: "/requestMoney",
           icon: <GiIcons.GiTakeMyMoney />,
         },
         {
           title: "Transaction Log",
           path: "/transaction",
           icon: <AiIcons.AiOutlineTransaction />,
         },
         {
           title: "Settings",
           path: "/settings",
           icon: <AiIcons.AiFillSetting />,
         },
       ];
