import React from "react";
import AppContext from "../context/appcontext";

const FilterProduct = () =>{
    const {ReduceOptionProduct} = React.useContext(AppContext);
    const handlerOption = (e) =>{
        //console.log(e.target.value);
        ReduceOptionProduct(e.target.value);
    }
    return (
        <div className="seletionProducts">
                <form className="formselection" action="">
                    <div className="selectionItem">
                        <label>Organizado por: </label>
                        <select name="categories" onChange={handlerOption}>
                            <option value="">Seleccione</option>
                            <option value="menor">Menor Precio</option>
                            <option value="mayor">Mayor Precio</option>
                            <option value="mas">Mas Vendidos</option>
                            <option value="valorados">Mas Valorados</option>
                            <option value="AZ">A-Z</option>
                        </select>
                    </div>

                    <div className="selectionItem">
                        <label>Resultados Por Paginas: </label>
                        <select name="categories">
                            <option value="tres">3</option>
                            <option value="seis">6</option>
                            <option value="nueve">9</option>
                        </select>
                    </div>
                </form>
            </div>
    )
}
export default FilterProduct;