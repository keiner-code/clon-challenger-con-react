import React from 'react';
import {Carousel} from 'react-responsive-carousel';

const Carrousel = () =>{
    return(
        <div className="carouselcontainer">
        <Carousel autoPlay infiniteLoop={true} transitionTime={2000} showStatus={false} showThumbs={false}>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/banner-tv-bono-2021-dic-desktop.jpg?v=637750974954470000" alt='' />
                </div>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/Banner-aliso-diciembre-desktop.jpg?v=637747786303530000"  alt=''/>
                </div>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/banner-tv-bono-2021-dic-desktop.jpg?v=637750974954470000" alt='' />
                </div>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/Banner-aliso-diciembre-desktop.jpg?v=637747786303530000"  alt=''/>
                </div>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/banner-tv-bono-2021-dic-desktop.jpg?v=637750974954470000" alt='' />
                </div>
                <div>
                    <img src="https://challengerco.vteximg.com.br/arquivos/Banner-aliso-diciembre-desktop.jpg?v=637747786303530000"  alt=''/>
                </div>
            </Carousel>
            </div>
    )
}

export default Carrousel;