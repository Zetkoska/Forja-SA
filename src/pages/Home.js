import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursoCard from '../components/CursoCard';
import cursos from '../data/cursos';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <section className="mb-10 text-center">
                    <img
                        src="/logo_forjaF.png"
                        alt="Logo Forja"
                        className="mx-auto h-60 w-60"
                        style={{ objectFit: 'contain' }}
                    />
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Bienvenido a Forja SA</h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">Impulsa tu carrera con cursos de alta calidad en Forja.<br />Con nosotros, podrás acceder a capacitación profesional, online, y presencial para tu desarrollo.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-6">Cursos Destacados</h2>
                    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {cursos.slice(0, 3).map(curso => (
                            <CursoCard key={curso.id} curso={curso} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 