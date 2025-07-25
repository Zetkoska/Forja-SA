import React from 'react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo_forja.jpg"
                        alt="Logo"
                        className="h-12 w-12 rounded-full border-2 border-white shadow"
                    />
                    <span className="font-extrabold text-2xl text-white tracking-wide drop-shadow">
                        Forja
                    </span>
                </div>
                <ul className="flex gap-6 font-medium items-center">
                    <li>
                        <a
                            href="/"
                            className="text-white relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100 after:duration-300"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/cursos"
                            className="text-white relative after:block after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100 after:duration-300"
                        >
                            Cursos
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contacto"
                            className="ml-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}