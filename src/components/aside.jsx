import React from 'react';
import AppContext from '../context/appcontext';

const Aside = () =>{
    const {ReduceOptionProduct} = React.useContext(AppContext);
    const [aside, setAside] = React.useState({
                                        asideOption1: false,
                                        asideOption2: false,
                                        asideOption3: false,
                                        asideOption4: false,
    })

    const handlerPrice = (e) =>{
        ReduceOptionProduct(e.target.value);
    }
    return (
        <div className="aside">
            <div className="asidecontainer">
                <div className="asideComponent">
                    <hr/>
                        <div className="asideItem">
                            <p>Rango de precio</p>
                            <button
                                onClick={()=>setAside({asideOption1: !aside.asideOption1})}>
                                {aside.asideOption1 ? <i className="far fa-minus"></i>: 
                                <i className="fal fa-plus"></i>}
                            </button>
                        </div>
                    {aside.asideOption1 ? 
                    <div className="optionaside">
                    <div className="optionItem" onChange={handlerPrice}>
                        <label ><input  type="radio" name='price' value='800.000'/>$700.000 - $800.000 (1)</label>
                        <label ><input  type="radio" name='price' value='menor'/>$800.000 - $900.000 (2)</label>
                        <label ><input  type="radio" name='price' value='mayor'/>$1.700.000 - $1.800.000 (3)</label>
                    </div>
                </div>: ''}
                </div>

                <div className="asideComponent">
                    <hr/>
                        <div className="asideItem">
                            <p>Tamaño de pantalla (pulgadas)</p>
                            <button
                                onClick={()=>setAside({asideOption2: !aside.asideOption2})}>
                                {aside.asideOption2 ? <i className="far fa-minus"></i>: 
                                <i className="fal fa-plus"></i>}
                            </button>
                        </div>
                    { aside.asideOption2 ? 
                    <div className="optionaside">
                    <div className="optionItem">
                        <label ><input type="radio"/>32 (1)</label>
                        <label ><input type="radio"/>43 (2)</label>
                    </div>
                </div>: ''}
                </div>

                <div className="asideComponent">
                    <hr/>
                        <div className="asideItem">
                            <p>Smart</p>
                            <button 
                                onClick={()=>setAside({asideOption3: !aside.asideOption3})}>
                                {aside.asideOption3 ? <i className="far fa-minus"></i>: 
                                <i className="fal fa-plus"></i>}
                            </button>
                        </div>
                    {aside.asideOption3 ? 
                    <div className="optionaside">
                    <div className="optionItem">
                        <label ><input type="radio"/>si (6)</label>
                    </div>
                </div>: ''}
                </div>

                <div className="asideComponent">
                    <hr/>
                        <div className="asideItem">
                            <p>Resolucion</p>
                            <button 
                                onClick={()=>setAside({asideOption4: !aside.asideOption4})}>
                                {aside.asideOption4 ? <i className="far fa-minus"></i>: 
                                <i className="fal fa-plus"></i>}
                            </button>
                        </div>
                    {aside.asideOption4 ?
                    <div className="optionaside">
                    <div className="optionItem">
                        <label ><input type="radio"/>HD (3)</label>
                        <label ><input type="radio"/>Full HD (3)</label>
                    </div>
                </div>: ''}
                    <hr/>
                </div>
            </div>
        </div>
    )
}
export default Aside;