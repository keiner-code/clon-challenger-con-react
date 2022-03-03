import React from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/appcontext';
import Order from '../containers/order';

const PageArticle = ()=>{
    const pro = [];
    const {product,ViewCart,showcart,AddToCart} = React.useContext(AppContext);
    const [image, setImage] = React.useState('https://challengerco.vteximg.com.br/arquivos/ids/159090-500-500/SQ6778_1.jpg?v=637631933367170000');
    const {id} = useParams();
    product.map(item => item.title === id ? pro.push(item): '');
    const handlerClick = (value) =>{
        setImage(value);
    }
    const handlerCart = (date) =>{
        ViewCart(!showcart)
        AddToCart(date);
    }
    return(
        <>
        <div className="cardSectionDetails">
        <div className="cardIconImages">
            <div className="cardImage">
            <img onClick={() =>handlerClick(pro[0].image[0].img0)} src={pro[0].image[0].img0} alt=""/>
            <img onClick={() =>handlerClick(pro[0].image[0].img1)} src={pro[0].image[0].img1} alt="" />
            <img onClick={() =>handlerClick(pro[0].image[0].img2)} src={pro[0].image[0].img2} alt="" />
            <img onClick={() =>handlerClick(pro[0].image[0].img3)} src={pro[0].image[0].img3} alt="" />
            <img onClick={() =>handlerClick(pro[0].image[0].img4)} src={pro[0].image[0].img4} alt="" />
        </div>
    </div>
        <div className="cardImages">
            <img src={image} alt="" />
        </div>
        <div className="cardDetailsProducts">
            <div className="titleproduct">
                <h2>{pro[0].title}</h2>
                <p>{pro[0].idproduct}</p>
            </div>
            <div className="descriptionProduct">
                <p>{pro[0].description}</p>
            </div>
            <div className="priceProduct">
                <p>Mejor Precio: <strong>{pro[0].price}</strong></p>
            </div>
            <div className="sendingProduct">
                <p><i className="far fa-truck-moving"></i> Envio Gratis</p>
                <p>Terminos Y Condiciones Envio Gratis: <a href="http://">Clic Aqui</a></p>
            </div>
            <div className="amountProduct">
                <div className="btnAddProduct">
                    <input type="text" placeholder={pro[0].quantity} />
                   <div className="btnSubmit">
                    <button type="submit">+</button>
                    <button type="submit">-</button>
                   </div>
                </div>
                <div className="btnAddPayment">
                    <button onClick={()=>handlerCart(pro[0])}>Agregar Al Carrito</button>
                    <button>Comprar Ahora <i className="fal fa-shopping-cart"></i></button>
                </div>
                
            </div>
            <div className="paymentMethodProduct">
                <h4>Metodos De Pago:</h4>
                <div>
                    <p><strong><img src="https://www.challenger.com.co/arquivos/payment_tarjeta_credito.png?v=637357063101230000" alt=""/></strong>Tarjeta De Credito</p>
                    <p><strong><img src="https://www.challenger.com.co/arquivos/payment_pse.png?v=637357063100170000" alt=""/></strong>PSE - Tarjeta Debito</p>
                </div>
            </div>
        </div>
    </div>
     <div className="cardProductItemResult">
     {showcart && <Order/>}
     </div>
    </>
    )
}

export default PageArticle;