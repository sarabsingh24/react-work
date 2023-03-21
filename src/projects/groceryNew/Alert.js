import React,{useEffect} from 'react'

export default function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [list]);

  return <small className={`food-item-highlight ${type}`}>{msg}</small>;
}
