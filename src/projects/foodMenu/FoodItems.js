import React from "react";
import Box from "@material-ui/core/Box";
import Foodcontainer from "./FoodContainer";
import { WindowWidth } from "./WindowWidth";

export default function FoodItems({ items }) {
  const { IsDesktop } = WindowWidth();

  return (
    <div>
      <Box
        display="flex"
        justifyContent={IsDesktop ? "left" : "center"}
        flexWrap="wrap"
        p={1}
        m={1}
      >
        {items.map((menu) => {
          return (
            <Box p={1} key={menu.title}>
              <Foodcontainer {...menu} />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
