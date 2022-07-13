import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'; 
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';

import './style/global.scss';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/entrar" element={<LoginScreen />} />
                <Route path="/cadastro" element={<RegisterScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
