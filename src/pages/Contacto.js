import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contacto() {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validar = () => {
        const nuevosErrores = {};
        if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
        if (!form.email.trim()) nuevosErrores.email = 'El email es obligatorio.';
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) nuevosErrores.email = 'El email no es válido.';
        if (!form.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio.';
        return nuevosErrores;
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const nuevosErrores = validar();
        setErrores(nuevosErrores);
        if (Object.keys(nuevosErrores).length === 0) {
            setEnviado(true);
            setForm({ nombre: '', email: '', mensaje: '' });
        }
    };

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
                    {enviado && <div className="mb-4 text-green-600 font-semibold">¡Mensaje enviado correctamente!</div>}
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Nombre</label>
                        <input type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className="w-full border-2 border-black-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        {errores.nombre && <p className="text-red-600 text-sm mt-1">{errores.nombre}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border-2 border-black-800 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        {errores.email && <p className="text-red-600 text-sm mt-1">{errores.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Mensaje</label>
                        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className="w-full border-2 border-black-800 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" />
                        {errores.mensaje && <p className="text-red-600 text-sm mt-1">{errores.mensaje}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Enviar</button>
                </form>
            </main>
            <Footer />
        </>
    );
} 