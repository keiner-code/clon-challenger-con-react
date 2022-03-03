import React from "react";

const SuggestedProducts = ({date}) =>{
    return (
        <div className="cartOptionItem">
            <img src={date.image[0].img0} alt="" />
            <p>{date.title}</p>
            <p className="cartOptionItemprice">$date.price</p>
            <button>Comprar ahora</button>
        </div>
    )
}
export default SuggestedProducts;