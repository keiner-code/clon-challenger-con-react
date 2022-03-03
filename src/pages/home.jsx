import React,{ useContext } from "react";
import Carrousel from "../components/carrousel";
import Section from "../components/section";
import NavSection from "../components/navsection";
import PopcatSection from "../containers/popcatsection";
import Article from "../components/article";
//import AppContext from '../context/appcontext';

const Home = () =>{
    /* const {state} = useContext(AppContext);
      state.product.map((value) => console.log(value)) */
    return(
        <>
            <Carrousel/> 
            <NavSection/>
            <Section/>
            <PopcatSection/>
            <Article/>
        </>
    )
}

export default Home;