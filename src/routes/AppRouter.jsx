import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CatalogoPage from '../pages/CatalogoPage';
import AdminPanelPage from '../pages/AdminPanelPage';
import Login from '../components/Login';
import Signup from '../components/Signup';
import PrivateRoute from '../components/PrivateRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalogo" element={<CatalogoPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<PrivateRoute><AdminPanelPage /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;