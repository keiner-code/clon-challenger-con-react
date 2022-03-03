import React from 'react';

const CartItem = ({value}) =>{
    const formatMoney = new Intl.NumberFormat('es');

    let [quantity, setquatity] = React.useState(1);
   
    return(
        <div className="cartItemCheckout">
            <img src={value.image[0].img0} alt=""/>
            <div className="cartDescriptio">
                <h5>{value.title}</h5>
                <p>Hasta 9 dias habiles</p>              
                <button>Eliminar Producto</button>
            </div>
                <p>${formatMoney.format(value.price)}</p>
            
            <div className="cartquantity">
                <p>Cantidad</p>
                <div className="cartitemQuantity">
                  <input type="text" placeholder={quantity}/>
                    <div className="cartquantutybutton">
                        <button onClick={()=>setquatity(quantity+=1)}>+</button>
                        <button onClick={()=>setquatity((quantity === 1? quantity: quantity-=1))}>-</button>
                    </div>
               </div>
            </div>
                <p>{formatMoney.format(quantity*value.price)}</p>
        </div>
    )
}
export default CartItem;