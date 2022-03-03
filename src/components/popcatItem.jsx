import React from 'react';

const PopcatItem = ({value}) =>{
    return (
        <div className="view">
            <img src={value.image} alt=""/>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
            <a href="http://">Ver Mas <i className="fal fa-arrow-right"></i></a>
        </div>
    )
}

export default PopcatItem;