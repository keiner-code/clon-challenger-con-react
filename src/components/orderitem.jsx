import React from 'react';
import AppContext from '../context/appcontext';
import { Link } from 'react-router-dom';

const OrderItem = ({date}) =>{
    const {showcart,ViewCart} = React.useContext(AppContext);
    return(
        <div className="cartItem"     >
            <div className="cartImg">
                <img src={date.image[0].img0} alt="" />
            </div>
            <div className="cartInfo">
                <p>{date.title}</p>
                <p>{date.price}</p>
            </div>
            <div className="cartBtn">
                <Link to="/checkout">IR AL CARRITO</Link>
                <button onClick={()=>ViewCart(!showcart)}>CONTINUAR COMPRANDO</button>
            </div>
        </div>
    )
}
export default OrderItem;