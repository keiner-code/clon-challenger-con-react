import React from 'react';
import ResultProductItem from '../components/resultproductitem';
import AppContext from '../context/appcontext';

const ResultProduct = () =>{
    const {product, FilterPrice} = React.useContext(AppContext);
   
        return(
            <div className="resultproduct">
                {FilterPrice.length > 0 ?
                    FilterPrice.map(item => <ResultProductItem value = {item} key={item.id}/>)
                    :
                    product.map(item => <ResultProductItem value = {item} key={item.id}/>)
                }
            </div>
        )
}
export default ResultProduct;