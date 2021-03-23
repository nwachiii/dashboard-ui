import React from "react";
import { PseudoBox } from "@chakra-ui/react";

const cardShadow = "1px 2px 20px 10px rgba(0,0,0,0.04)";

export const Card = ({ children, minH }) => (
         <PseudoBox
           m="2"
           role="group"
           cursor="pointer"
           w="100%"
           minH={minH}
           borderRadius="md"
           shadow={cardShadow}
           bg="white"
           _hover={{ fontWeight: "semibold" }}
           _groupHover={{ color: "tomato" }}
         >
           {children}
         </PseudoBox>
       );
