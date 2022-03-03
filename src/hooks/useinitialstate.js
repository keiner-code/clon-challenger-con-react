import React from 'react';
import date from '../InitialStates';

const CarProduct = {
    cart: [],
}

const UseInitialState = () =>{
    const [product, setProduct] = React.useState(date.product);
    const [service, setService] = React.useState(date.service);
    const [priceProduct, SetPriceProduct] = React.useState(0);
    const [showcart, setShowCart] = React.useState(false);
    const [productCart, setProductCart] = React.useState(CarProduct);

const ViewCart = (value) =>{
    setShowCart(value);
}
const AddToCart = (product) =>{
    setProductCart({
        ...productCart,
        cart: [...productCart.cart, product]
    });
}
const ReduceOptionProduct = (value) =>{
    if(value === 'menor'){
        const price = 1000900; 
         SetPriceProduct(price);
     }else if(value === 'mayor'){
        const price = 1300000;
         SetPriceProduct(price);
     }else{
         SetPriceProduct(product);
     }
}
const FilterPrice = React.useMemo(() =>
    product.filter((item) =>{
        return (priceProduct === 1000900 ? item.price < priceProduct: item.price > priceProduct);
    })
);

return{
        product,
        FilterPrice,
        service,
        ReduceOptionProduct,
        showcart,
        ViewCart,
        AddToCart,
        productCart
      }
}
export default UseInitialState;

/*  const initialstate = {
       product: date.product,
       services: date.service,
       reduceOption: 0,
       resultreduce: []
    };
    const actionType = {
        products: 'PRODUCT',
        services: 'SERVICE',
        reduceOption: 'OPTIONPRODUCT',
        resultReduce: 'RESULTREDUCE'
    }
    const reduceObject = (state, payload) => ({
        [actionType.products]:{
            state
        },
        [actionType.services]:{
            state
        },
        [actionType.reduceOption]:{
            ...state,
            reduceOption: payload
        },
        [actionType.resultReduce]:{
            state,
            resultreduce: payload
        }
      });
    const reducer = (state,action) =>{
        if(reduceObject(state)[action.type]){
            return reduceObject(state, action.payload)[action.type];
        }else{
            return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer,initialstate); */


    
   //}
   //console.log(state.product[0].price);

   
    
    
    //console.log('astht',typeof(InitialState));
    //state.product.map(item => console.log(item))
    //console.log(state.resultreduce);