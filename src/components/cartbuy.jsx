import React from 'react';

const CartBuy = () =>{
    return(
<div className="CartBuy">
    <div className="checkoutCartResumen">
        <div className="ResumenPriceCart">
            <div className="quantityentered"><strong>Entregar</strong> <p>6 item en <a href="http://">Bogota, D.c.</a></p></div>
            <a href="http://">Sumar cupon de descuento</a>
            <h2>Resumen De La Compra</h2>
            <p>El detalle de los impuesto de tu compra, lo encontraras detallado en tu factura</p>
            <div className="priceCart">
                <div><p>Subtotal</p><p>$5.734.400</p></div>
                <div><p>Costo Envio</p><p>Gratis</p></div>
                <div><p>Envio Gratis</p><p>$-100.000.00</p></div>
                <div><p>Total</p><p>$5.734.400</p></div>
            </div>
        </div>
    </div>
    <div className="cartbtnbuy">
        <button>Finalizar Compra</button>
    </div>
</div>
    )
}

export default CartBuy;