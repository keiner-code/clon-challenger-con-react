import React from 'react';

const Footer = () =>{
    return (
<div className="footerItem">
        <div className="footer">
            <div className="footersearch">
                <div className="formfooter">
                    <h3>Inscribete a nuestro boletin de promociones y noticias</h3>
                    <div className="footerbtn">
                    <input 
                    type="text"
                    placeholder="Escribe tu dirrecion de correo electronico" />
                    <button><i className="far fa-paper-plane"></i></button>
                    </div>
                </div>
                <p>Con la inscripción de su correo electrónico, usted autoriza 
                    de manera previa, expresa e informada a CHALLENGER S.A.S., 
                    el Tratamiento de sus Datos, para actividades de marketing,
                    publicidad y mercadotecnia. Si requiere mayor información 
                    para conocer nuestra política de Datos Personales 
                    consúltela Aquí. Si desea presentar una consulta o reclamo
                    o ejercer sus derechos como Titular, puede comunicarse a 
                    los siguientes correos: <a href="http://">atencionalcliente@challenger.co</a> 
                    o <a href="http://">protecciondedatos@lemco.co</a></p>
            </div>
            <div className="footerpayments">
                <h3>METODO DE PAGO:</h3>
                <div className="imgpayments">
                    <img src="https://www.challenger.com.co/arquivos/medios%20de%20pago%20challenger-min.png?v=637578440804730000" alt="" />
                    <div className="optionpayments">
                        <ul>
                            <p>CONPRAS</p>
                            <li><a href="http://">Nuestras tiendas</a></li>
                            <li><a href="http://">Cocina</a></li>
                            <li><a href="http://">Television</a></li>
                            <li><a href="http://">Audio</a></li>
                            <li><a href="http://">Refrigeracion</a></li>
                            <li><a href="http://">Calentadores de agua</a></li>
                            <li><a href="http://">Aires Acondicionados</a></li>
                        </ul>
                        <ul>
                            <p>NOSOTROS</p>
                            <li><a href="http://">Quiene Somos</a></li>
                            <li><a href="http://">Registro de proveedores</a></li>
                            <li><a href="http://">Ventas institucionales</a></li>
                            <li><a href="http://">Ventas Internacionales</a></li>
                            <li><a href="http://">Constructor</a></li>
                            <li><a href="http://">Laboratorio</a></li>
                            <li><a href="http://">Blog</a></li>
                        </ul>
                        <ul>
                            <p>LEGALES</p>
                            <li><a href="http://">¿Tienes dudas?</a></li>
                            <li><a href="http://">Política de tratamiento de datos</a></li>
                            <li><a href="http://">Política de cambios y devoluciones</a></li>
                            <li><a href="http://">Política de entrega y cobertura</a></li>
                            <li><a href="http://">Términos y Condiciones</a></li>
                            <li><a href="http://">Preguntas, quejas y reclamos</a></li>
                            <li><a href="http://">Términos y Condiciones Eventos</a></li>
                            <li><a href="http://">FE DE ERRATA Combo TV barra de sonido</a></li>
                        </ul>
                        <ul>
                            <p>CONTACTO</p>
                            <li><a href="http://">Colombia</a></li>
                            <li><a href="http://">Teléfono: (601) 425 6000</a></li>
                            <li><a href="http://">Dg. 25G No. 94 - 55</a></li>
                            <li><a href="http://">Bogotá</a></li>
                            <br/>
                            <li><a href="http://">Ecuador</a></li>
                            <li><a href="http://">Teléfono: (593) 22 801 142</a></li>
                            <li><a href="http://">Cl. Aceitunos 168 Eloy Alfaro</a></li>
                            <li><a href="http://">Quito</a></li>
                        </ul>
                        <ul>
                            <p>SIGUENOS</p>
                            <div className="socialfooter">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-whatsapp-square"></i>
                            </div>
                            <img src="https://challengerco.vteximg.com.br/arquivos/TDT_Colombia_logo.svg-1-120x62.png?v=637401233356170000" alt="" />
                        </ul>
                    </div>
                </div>  
            </div>
            <div className="footerinfo">
                <hr/>
                <ul>
                    <h1>CHALLENGER</h1>
                   <ul>
                    <li><a href="http://">Términos legales del sitio</a></li>
                    <p>|</p>
                    <li><a href="http://">Politicas de Cookies </a></li>
                    <p>|</p>
                    <li><a href="http://">Politicas de Privacidad</a></li>
                   </ul>
                </ul>
                <p>Todos los derechos reservados Challenger 2020.</p>
                <p>Todas las marcas e imágenes son propiedad de Challenger.</p>
                <p>Queda prohibida la reproducción total o parcial de cualquier contenido sin autorización expresa.</p>
            </div>
        </div>
    </div>
    )
}
export default Footer;