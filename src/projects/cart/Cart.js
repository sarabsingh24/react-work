import React from 'react';
import Mycart from './Mycart';

import Itemlist from './Itemlist';
import { useGlobalCart } from './Context'

import './Style.css'

export default function Cart() {
    const { loading } = useGlobalCart();

    if (loading) {
        return (
            <div>
                <h4> Loading....</h4>
            </div>
        )
    }

    return (<>
       
        <Mycart />
        <div className="content-box">
            <Itemlist />
        </div> 
       
        </>
    )
}
