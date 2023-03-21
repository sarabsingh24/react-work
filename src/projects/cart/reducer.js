import React from 'react'

  const reducer  =(state,action)=>{

      if (action.type === "CLEAR_CART"){
          return {...state, cart:[]}
      }

      if (action.type === 'REMOVE-ITEM'){
      
          let newList = state.cart.filter(item => {
              return item.id !== action.id
          })
          return {...state,cart:newList}
        
      }
      if (action.type === 'INCREASE'){
         
          let tempCart = state.cart.map(cartItem => {
              if (cartItem.id === action.id){
                  let addAmount = cartItem.amount + 1;
                  return { ...cartItem, amount: addAmount }
               }
             
              return cartItem
              
          })
          
          return { ...state, cart: tempCart }
      }

      if (action.type === 'DECREASE') {
          let lessQty = state.cart.map(cartItem => {
              if (cartItem.id == action.id) {
                  return { ...cartItem, amount:cartItem.amount -1}
              }

              return cartItem
          }).filter(cartItem => cartItem.amount !== 0)
         
          return { ...state, cart: lessQty }
      }

      if (action.type === 'GET_TOTAL'){

        let {total,amount} = state.cart.reduce((cartTotal,cartItem)=> {
            let { price, amount} = cartItem
            let itemtotal = price * amount
            cartTotal.total += itemtotal
            cartTotal.amount += amount
            
            return cartTotal
        },{
            total:0,
            amount:0
        })

        total = parseFloat(total.toFixed(2))
            return {...state,total,amount}
      }

      if(action.type === 'LOADING'){
          return { ...state, loading:true }
      }

      if (action.type === 'DISPLAY'){
          console.log(action.data)
          return { ...state, loading: false, cart: action.data }
      }
 return state;
  }
export default reducer;