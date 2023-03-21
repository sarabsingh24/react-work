import React,{useContext} from 'react'

const SecondContext = React.createContext();

const SecondProvider = ({children})=>{
const[name,setName] = React.useState("scp");

    return <SecondContext.Provider value={{name}}>{children}
    </SecondContext.Provider>
}

export const useSecondContext = () => {
    return useContext(SecondContext);
}

export { SecondProvider}