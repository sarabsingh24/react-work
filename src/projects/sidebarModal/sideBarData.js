import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineGift,
  AiOutlineContacts,
} from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiAccessibility } from "react-icons/bi";


export const mylinks = [
  {
    id: 1,
    name: "Home",
    url: "/home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    icon: <AiOutlineUser />,
  },
  {
    id: 3,
    name: "Product",
    url: "/product",
    icon: <AiOutlineGift />,
  },
  {
    id: 4,
    name: "Contact Us",
    url: "/contact",
    icon: <TiContacts />,
  },
];

