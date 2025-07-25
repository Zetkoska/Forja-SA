import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursoCard from '../components/CursoCard';
import cursos from '../data/cursos';

export default function Cursos() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Todos los Cursos</h1>
                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {cursos.map(curso => (
                        <CursoCard key={curso.id} curso={curso} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
} 