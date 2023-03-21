import React,{useContext} from 'react';
import Data from './data';
import reducer from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project'

const CartContext = React.createContext();

const initialState ={
    loading:false,
    cart: Data,
    total:0,
    amount:0
}

const CartProvider = ({children})=>{

    const [state, dispatch] = React.useReducer(reducer,initialState);

    const clearCart = ()=> {
        dispatch({type:"CLEAR_CART"})
    }

    const removeItem = (id)=> {
        dispatch({type:"REMOVE-ITEM",id:id})
    }

    const increase = (id) => {
        dispatch({type:"INCREASE",id:id})
    }
    const decrease = (id) => {
        dispatch({ type: "DECREASE", id: id })
    }

    React.useEffect(()=>{
      
        dispatch({type: 'GET_TOTAL'})

    },[state.cart])


    const fetchData = async () => {

        dispatch({ type: "LOADING" });
        const response = await fetch(url);
        const data = await response.json()
        dispatch({ type: "DISPLAY",data });
    }

    React.useEffect(()=>{
       
        fetchData()

    },[])

  
    return <CartContext.Provider value={{ ...state, clearCart, removeItem, increase, decrease}}>
             {children}
            </CartContext.Provider>

}

const useGlobalCart = () => {
    return useContext(CartContext)
}

export { CartProvider, useGlobalCart}