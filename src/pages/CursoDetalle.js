import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cursos from '../data/cursos';

export default function CursoDetalle() {
    const { id } = useParams();
    const curso = cursos.find(c => c.id === id);

    if (!curso) {
        return (
            <>
                <Navbar />
                <main className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
                    <Link to="/cursos" className="text-blue-600 hover:underline">Volver a cursos</Link>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <img src={curso.imagen} alt={curso.titulo} className="w-full md:w-1/3 rounded-lg shadow-md object-cover" />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-2">{curso.titulo}</h1>
                        <p className="text-gray-700 mb-4">{curso.descripcion}</p>
                        <ul className="mb-4 list-disc list-inside">
                            {curso.temario.map((tema, i) => (
                                <li key={i}>{tema}</li>
                            ))}
                        </ul>
                        <p><span className="font-semibold">Duración:</span> {curso.duracion}</p>
                        <p><span className="font-semibold">Modalidad:</span> {curso.modalidad}</p>
                        <p><span className="font-semibold">Precio:</span> {curso.precio}</p>
                        <p><span className="font-semibold">Facilitador:</span> {curso.facilitador}</p>
                        <a href="/contacto" className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Inscribirse / Consultar</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
} 