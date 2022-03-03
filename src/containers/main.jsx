import React from "react";
import Aside from "../components/aside";
import FilterProduct from "../components/filterProduct";
import ResultProduct from "./resultproduct";

const Main = () =>{
    return(
        <div className="main">
            <div className="mainContent">
                <Aside/>
            </div>
            <div className="mainProduct">
                <FilterProduct/>
                <ResultProduct/>
            </div>
        </div>
    )
}
export default Main;