import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useGlobalCart } from './Context'

export default function Mycart() {
    const { amount } = useGlobalCart();
    
  return <div className="menu">
      <div>Company Name</div>
      <IconButton>
          {amount}
          <ShoppingCartIcon className="text-white" />
      </IconButton>
     
  </div>;
}
