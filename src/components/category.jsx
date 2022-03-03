import React from 'react';
import tv from '../assets/img/tv.png';

const Category = () =>{
    return (
    <div className="category">
        <div className="categoryItem">
            <div className="item">
                <img src={tv} alt="" />
                <p>4K UHD</p>
                <a href="http://">Ver productos <i className="far fa-arrow-right"></i></a>
            </div>

            <div className="item">
                <img src={tv} alt="" />
                <p>4K UHD</p>
                <a href="http://">Ver productos <i className="far fa-arrow-right"></i></a>
            </div>

            <div className="item">
                <img src={tv} alt="" />
                <p>4K UHD</p>
                <a href="http://">Ver productos <i className="far fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
    )
}

export default Category;