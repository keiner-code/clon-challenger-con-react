import React from 'react';
import PopcatItem from '../components/popcatItem';
import AppContext from '../context/appcontext';

const PopcatSection = () => {
    const {service} = React.useContext(AppContext);
    //console.log(state.services);
    return (
    <div className="viewPlus">
         {
           service.map(date => ( <PopcatItem value={date} key={date.id}/>
           ))} 
        
    </div>
    )
}

export default PopcatSection;