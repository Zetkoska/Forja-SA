import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import CursoDetalle from './pages/CursoDetalle';
import Contacto from './pages/Contacto';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/cursos/:id" element={<CursoDetalle />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}

export default App;