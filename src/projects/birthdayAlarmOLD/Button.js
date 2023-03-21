import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function ButtonComp({ btnName, btnFun }) {
  return (
    <Box m={3} display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={btnFun}
      >
        {btnName}
      </Button>
    </Box>
  );
}
