import React from 'react';
import Navbar from './components/navbar';
import './components/cascading.css'
import Index from './components';
import { BrowserRouter, Route } from 'react-router-dom';
import Productscreen from './components/productscreen';
import cartScreen from './components/cartScreen';


function App(){


    return(
        <BrowserRouter>
        <div className="exos">
        <Navbar/>
            <Route path="/products/:id" component={Productscreen}/>
            <Route path="/" exact={true} component={Index}/>
            <Route path="/cart/:id?" component={cartScreen}/>
        <div className="footer"><h4> @ All rights reserverd</h4></div>
        </div>
        </BrowserRouter>
    );}

export default App; 