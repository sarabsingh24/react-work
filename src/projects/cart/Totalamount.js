import React from 'react';
import { useGlobalCart} from './Context'

export default function Totalamount() {
    const { total } = useGlobalCart();
    return (
        <div className="total-amount">
            <div>Total</div>
            <div>${total}</div>  
        </div>
    )
}
