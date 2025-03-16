import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductManagement from '../components/ProductManagement';
import OrderManagement from '../components/OrderManagement';
import UserManagement from '../components/UserManagement';


const AdminPanelPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-semibold m-4">Panel de administración</h1>
            <div className="p-4">
                <ProductManagement />
                <OrderManagement />
                <UserManagement />
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanelPage;