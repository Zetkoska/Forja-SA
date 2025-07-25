import React from 'react';

export default function CursoCard({ curso }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
            <img src={curso.imagen} alt={curso.titulo} className="h-40 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{curso.titulo}</h3>
                <p className="text-gray-600 mb-4 flex-1">{curso.descripcion}</p>
                <a href={`/cursos/${curso.id}`} className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Ver detalles</a>
            </div>
        </div>
    );
} 