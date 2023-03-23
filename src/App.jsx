import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from "./pages/home/Home";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ProductList2 from "./pages/product/productList2";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/sign-in' element={<SignInAndSignUp />} />
                    <Route path='/product' element={<ProductList2 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;