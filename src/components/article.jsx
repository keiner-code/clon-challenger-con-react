import React from 'react';
import image from '../assets/img/descarga2.jfif';

const Article = () => {
    return(
<div className="pointsOfSales">
        <div className="pointOfSalesItem">
        <div className="infoPoints">
            <h3>Visitanos en tu punto de venta mas cercano</h3>
            <hr/>
            <p>Conoce la ubicacion de nuestras tiendas a nivel nacional</p>
            <button>Ver Mas <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="imgPoints">
            <img src={image} alt="" />
        </div>
    </div>

    <div className="pointOfSalesItem1">
        <div className="imgPoints1">
            <img src={image} alt="" />
        </div>
        <div className="infoPoints1">
            <h3>Visitanos en tu punto de venta mas cercano</h3>
            <hr/>
            <p>Conoce la ubicacion de nuestras tiendas a nivel nacional</p>
            <button>Ver Mas <i className="fas fa-arrow-right"></i></button>
        </div>
    </div>

    <div className="pointOfSalesItem">
        <div className="infoPoints">
            <h3>Visitanos en tu punto de venta mas cercano</h3>
            <hr/>
            <p>Conoce la ubicacion de nuestras tiendas a nivel nacional</p>
            <button>Ver Mas <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="imgPoints">
            <img src={image} alt=""/>
        </div>
    </div>
</div>
    )
}
export default Article;