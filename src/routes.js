import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Teste from './Pages/Teste'

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teste" element={<Teste />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
    );
}

