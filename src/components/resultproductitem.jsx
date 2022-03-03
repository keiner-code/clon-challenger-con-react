import React from 'react'
import { Link } from 'react-router-dom';
import Order from '../containers/order';
import AppContext from '../context/appcontext';

const ResultProductItem = ({value}) =>{
     const {ViewCart,showcart,AddToCart} = React.useContext(AppContext);
    
    const handlerCart = (date) =>{
        ViewCart(!showcart)
        AddToCart(date);
    }
    return(
        <>
        <div className="cardContent">
                <Link to={`/article/${value.title}`}> 
                <div className="imageCard">
                    <img src={value.image[0].img0} alt="challengerco" />
                </div>
                <div className="titleCard">
                    <p>{value.title}</p>
                </div>
                <div className="descriptionCard">
                    <p>{value.idproduct}</p>
                </div>
                <div className="priceCard">
                    <p>$ {value.price}</p>
                </div>
                <div className="sendingCard">
                    <p><i className="far fa-truck-moving"></i> Envio Gratis</p>
                </div>
                </Link>
                <div className="btnCard">
                    <button
                        onClick={()=>handlerCart(value)} 
                        >Comprar Ahora
                    </button>
                </div>
        </div>
       <div className="cardProductItemResult">
       {showcart && <Order/>}
       </div>
        </>
    )
}
export default ResultProductItem;