import React from 'react'

export default function Alertmsg({ msg, type, removeAlert,list}) {


React.useEffect(()=>{
    let timeOut =  setTimeout(()=>{
        removeAlert();
    },2000);
    return () => clearTimeout(timeOut)

},[list])

    return (
        <div>
            <p className={type}>{msg}</p>
            
        </div>
    )
}
