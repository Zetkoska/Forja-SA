import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Forja SA - Todos los derechos reservados por Sebastian.</p>
            </div>
        </footer>
    );
} 