import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const querySnapshot = await getDocs(collection(db, 'orders'));
            const ordersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setOrders(ordersData);
        };
        getOrders();
    }, []);

    const handleUpdateOrder = async (id, updatedOrder) => {
        await updateDoc(doc(db, 'orders', id), updatedOrder);
        getOrders();
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Gestión de pedidos</h2>
            <ul className="list-disc list-inside">
                {orders.map((order) => (
                    <li key={order.id} className="mb-2">
                        <span className="mr-2">Pedido #{order.id} - Estado: {order.estado}</span>
                        <button onClick={() => handleUpdateOrder(order.id, { ...order, estado: 'Enviado' })} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Marcar como enviado</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;