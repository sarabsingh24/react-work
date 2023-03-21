import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function TopMenu({ filterItems, categories }) {
  const menuItems = categories.reduce(
    (value, newItem) => {
      if (!value.includes(newItem)) {
        value.push(newItem);
      }
      return value;
    },
    ["All"]
  );

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        p={1}
        mt={6}
      >
        {menuItems.map((name) => {
          return (
            <Box p={1} key={name}>
              <Button variant="outlined" onClick={() => filterItems(name)}>
                {name}
              </Button>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
