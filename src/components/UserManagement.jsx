import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const usersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(usersData);
        };
        getUsers();
    }, []);

    const handleUpdateUser = async (id, updatedUser) => {
        await updateDoc(doc(db, 'users', id), updatedUser);
        getUsers();
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Gestión de usuarios</h2>
            <ul className="list-disc list-inside">
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        <span className="mr-2">{user.email} - Rol: {user.rol}</span>
                        <button onClick={() => handleUpdateUser(user.id, { ...user, rol: 'admin' })} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Marcar como administrador</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;