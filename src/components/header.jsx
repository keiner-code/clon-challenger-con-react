import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/appcontext';

const Header = () =>{
    const {productCart} = React.useContext(AppContext);
    const numItem = productCart.cart.length;
    return(
        <>
<div className="navbar">
        <div className="navbarContact">
            <div className="nabvarTitleUsers"><a href="http://">Hola Eres Un Cliente Nuevo</a></div>
            <div className="navbarContactItem">
                <ul>
                    <li><a href="http://">Contactano</a></li>
                    <p>|</p>
                    <li><a href="http://">whatApp Televentas</a></li>
                    <li><a href="http://"><i className="fab fa-whatsapp"></i> (310) 5677535</a></li>
                </ul>
            </div>
        </div>

        <div className="titleNavbar">
            <Link to="/">CHALLENGER</Link>
        </div>
        <div className="searchNavbar">
            <div className="formNavbar">
            <form action="" method="get">
                <div className="inputSearchNavbar">
                    <input type="text" placeholder="Escribe aqui" />
                </div>
                <div className="btnSearchNavbar">
                    <button type="submit"><i className="fas fa-search"></i> Buscar</button>
                </div>
            </form>
        </div>
        <div className="usersNavbar">
            <a href="http://">MI CUENTA</a>
            <a href="http://">MIS PEDIDOS</a>
            <Link to="/checkout"><i className="far fa-shopping-cart"></i><p>{numItem}</p></Link>
        </div>
        </div>
        <div className="navNavbar">
            <nav> <ul>
                <li><Link to="/tv">TELEVISOR</Link></li>
                <li><a href="http://">AUDIO</a></li>
                <li><a href="http://">COCINA</a></li>
                <li><a href="http://">LAVADO</a></li>
                <li><a href="http://">CALENTADORES DE AGUA</a></li>
                <li><a href="http://">AIRE ACONDICIONADO</a></li>
                <li><a href="http://">REFRIGERACION</a></li>
                <li><a href="http://">MUEBLES</a></li>
                <li><a href="http://">BLOG</a></li>
            </ul></nav>
        </div>
        <div className="navbarMovile">
            <a href="http://"><i className="far fa-shopping-cart"></i><p>2</p></a>
            <a href="http://"><i className="fas fa-search"></i></a>
            <a href="http://"><i className="far fa-bars"></i></a>
        </div>
    </div>
    <div className="sendFree">
    <p><i className="fal fa-truck-container"></i><a href="http://">ENVÍO GRATIS - APLICA TÉRMINOS Y CONDICIONES</a></p>
</div>
</>
    )
}
export default Header;