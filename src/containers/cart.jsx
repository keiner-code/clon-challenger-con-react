import React from 'react';
import CartItem from '../components/cartitem';
import AppContext from '../context/appcontext';


const Cart = () =>{
    const {productCart} = React.useContext(AppContext);
    return(
        <div className="checkoutCart">
        <h1>Carrito De Compras</h1>
        { productCart.cart.map(item => (<CartItem value={item} key={item.id}/>))}
        
        <div className="choseMoreProducts">
            <a href="http://">Elegir Mas Productos</a>
        </div>
    </div>
    )
}

export default Cart;