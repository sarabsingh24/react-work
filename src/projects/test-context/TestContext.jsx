import React,{createContext, useContext} from 'react';

const PersonContext = createContext();

export default function TestContext() {
  return (
    <PersonContext.Provider value={'sarab Preet singh'}>
        <HeaderType />
    </PersonContext.Provider>
  )
}


const HeaderType = ()=>{
    const data = useContext(PersonContext)
    return <div>{data}</div>
}