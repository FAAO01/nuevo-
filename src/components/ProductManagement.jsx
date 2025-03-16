import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        nombre: '',
        descripcion: '',
        precio: 0,
        imagenes: [],
    });

    useEffect(() => {
        const getProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsData);
        };
        getProducts();
    }, []);

    const handleInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleAddProduct = async () => {
        await addDoc(collection(db, 'products'), newProduct);
        setNewProduct({ nombre: '', descripcion: '', precio: 0, imagenes: [] });
        getProducts();
    };

    const handleUpdateProduct = async (id, updatedProduct) => {
        await updateDoc(doc(db, 'products', id), updatedProduct);
        getProducts();
    };

    const handleDeleteProduct = async (id) => {
        await deleteDoc(doc(db, 'products', id));
        getProducts();
    };

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(productsData);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Gestión de productos</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }} className="mb-4">
                <input type="text" name="nombre" placeholder="Nombre" value={newProduct.nombre} onChange={handleInputChange} className="border p-2 mr-2" />
                <input type="text" name="descripcion" placeholder="Descripción" value={newProduct.descripcion} onChange={handleInputChange} className="border p-2 mr-2" />
                <input type="number" name="precio" placeholder="Precio" value={newProduct.precio} onChange={handleInputChange} className="border p-2 mr-2" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar producto</button>
            </form>
            <ul className="list-disc list-inside">
                {products.map((product) => (
                    <li key={product.id} className="mb-2">
                        <span className="mr-2">{product.nombre} - ${product.precio}</span>
                        <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-1">Eliminar</button>
                        <button onClick={() => handleUpdateProduct(product.id, { ...product, precio: product.precio + 1 })} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Aumentar precio</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;