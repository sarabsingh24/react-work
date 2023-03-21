import React from 'react';
import { CartProvider } from './Context';
import Cart from './Cart'
export default function Mainpage() {
    return (
        <CartProvider>
            <Cart />
        </CartProvider>
    )
}
