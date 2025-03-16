import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/catalogo" className="text-white hover:text-gray-300">Catálogo</Link>
                    </li>
                    {currentUser && (
                        <li>
                            <Link to="/admin" className="text-white hover:text-gray-300">Admin Panel</Link>
                        </li>
                    )}
                </ul>
                <div className="flex items-center">
                    {currentUser ? (
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cerrar sesión</button>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-300 mr-4">Iniciar sesión</Link>
                            <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registrarse</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;