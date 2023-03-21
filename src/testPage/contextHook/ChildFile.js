import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./ContextWork";

export default function ChildFile() {
  const user = useContext(UserContext);
  const last = useContext(ChannelContext);
  return (
    <p>
      my name is the {user} and the last name {last}
    </p>
  );
}
