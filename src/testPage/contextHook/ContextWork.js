import React from "react";
import ChildFile from "./ChildFile";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Context() {
  return (
    <UserContext.Provider value="sarab">
      <ChannelContext.Provider value="preet">
        <ChildFile />
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}
