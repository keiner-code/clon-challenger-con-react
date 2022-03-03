import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/layout";
import Home from "../pages/home";
import TV from "../pages/tv";
import AppContext from '../context/appcontext';
import UseInitialState from "../hooks/useinitialstate";
import PageArticle from "../pages/pagearticle";
import Checkout from '../pages/checkout'

const App = ()=>{
    const initialState = UseInitialState();
    const isEmpty = Object.keys(initialState).length;
    return (
        <>
        {isEmpty > 0 ?(
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/article/:id" element={<PageArticle/>} />
                <Route path="/tv" element={<TV/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
        ): <h1>Cargando</h1> }
        </>
    )
}

export default App;