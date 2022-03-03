import React from "react";
import HeaderImage from '../components/headerImage';
import Category from "../components/category";
import Main from "../containers/main";
import PopcatSection from "../containers/popcatsection";
import Article from "../components/article";

const TV = () =>{
    return(
        <>
            <HeaderImage/>
            <Category/>
            <Main/>
            <PopcatSection/>
            <Article/>
        </>
    )
}

export default TV;