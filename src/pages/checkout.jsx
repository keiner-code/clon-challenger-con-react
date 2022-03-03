import React from 'react';
import Cart from '../containers/cart';
import CartBuy from '../components/cartbuy';
import CartRecomends from '../components/cartrecomends';
const Checkout = () =>{
    return(
    <div className="checkout">
        <div className="CartCheckout"><Cart/></div>
        <div className="BuyCheckout"><CartBuy/></div>
        <div className="CartRecomends"><CartRecomends/></div>
    </div>
    )
}
export default Checkout;