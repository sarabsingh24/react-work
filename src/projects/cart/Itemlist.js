import React from 'react';
import Amount from './Amount';
import Totalamount from './Totalamount';
import Button from '@material-ui/core/Button';
import { useGlobalCart} from './Context'

export default function Itemlist() {
    const { cart, clearCart, removeItem,} = useGlobalCart();

    if(cart.length === 0){
        return (
            <div>

                No items is added in cart

            </div>
        )
    }


    return (
        <div className="item-list">
            {
                cart.map((item,index) => {
                    
                    const { amount,id, title,img,price} = item;
                    return (
                        <div className="list" key={id}>
                            <div className="img-width">
                            <img src={img} alt={title} />
                            </div>
                            <div className="info">
                                <h4>{title}</h4>
                                <div className="price-color">${price}</div>
                                <button className="remove-btn" onClick={() => removeItem(id)}>remove</button>
                            </div>
                            
                            <Amount amount={amount}  id={id}/>
                            
                           
                        </div>
                    )
                })
            }
            <Totalamount />
            <Button variant="outlined" size="small" color="secondary" onClick={clearCart} >
                Clear Cart
        </Button>
        </div>
    )
}
