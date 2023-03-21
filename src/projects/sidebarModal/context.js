import React,{useContext} from 'react';

const FirstContext = React.createContext();

const AppProvider = ({children}) => {
return <FirstContext.Provider value="sarab">{children}</FirstContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(FirstContext);
} 

export { FirstContext, AppProvider };