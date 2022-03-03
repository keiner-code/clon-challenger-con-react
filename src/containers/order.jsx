import React from 'react';
import AppContext from '../context/appcontext';
import OrderItem from '../components/orderitem';
import SuggestedProducts from '../components/suggestedproducts';

const Order = () =>{
    const {showcart,ViewCart,productCart,product} = React.useContext(AppContext);
    return(
            <div className="cardposition">
            <div className="cart">
            <div className="cartResponse">
            <div className="cartTitle">
                <h3>AGREGASTE UN PRODUCTO A TU CARRITO</h3>
                <button 
                    onClick={()=>ViewCart(!showcart)}>
                    <i className="far fa-times"></i>
                </button>
                </div> 
                {productCart.cart.map(item => (<OrderItem date={item} key={item.id}/>))}
            

            <h3>TAMBIÉN TE PUEDE INTERESAR</h3>
            <div className="cartOption"> 
                {product.map(item=>(item.id <= 2 && <SuggestedProducts date={item} key={item.id}/>))}
            </div>
        </div>
        </div>
        </div>
    )
}
export default Order;