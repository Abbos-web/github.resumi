import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Portifolio from './pages/Portifolio';
import Skills from './pages/Skills';
import Prices from './pages/Prices';
import Blog from './pages/Blog';


export default function MainApp() {
    return (
        <div className='main'>
            


            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Portifolio/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/prices" element={<Prices/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
