import React from 'react';
import imgsection from '../assets/img/descarga1.jfif';

const Section = () =>{
    return(
    <div className="sectionItem">
        <div className="sectionImg">
            <img src={imgsection} alt="" />
        </div>
        <div className="sectionDetails">
            <h3>¡Es el momento de estrenar con Challenger¡</h3>
            <hr/>
            <p>Todos nuestros productos con envío gratis</p>
            <button>Ver Mas <i className="fal fa-arrow-right"></i></button>
        </div>
    </div>
    )
}
export default Section;