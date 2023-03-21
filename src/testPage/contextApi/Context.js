import React from "react";

const UserContext = React.createContext();

const Provider = UserContext.Provider;
const Consumer = UserContext.Consumer;

export { Provider, Consumer };
