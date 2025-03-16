import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            if (currentUser) {
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                if (userDoc.exists() && userDoc.data().rol === 'admin') {
                    setIsAdmin(true);
                }
            }
            setLoading(false);
        };
        checkAdmin();
    }, [currentUser]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return isAdmin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;