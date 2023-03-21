import React, { useState } from "react";
import List from "./list";
import Navbar from "./navbar";
import ContextFile from "./context";

export default function Index() {
  return (
    <ContextFile>
        <Navbar />
        <List />
    </ContextFile>
  );
}
