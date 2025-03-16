import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            {product.imagenes && product.imagenes.length > 0 && (
                <img
                    className="w-full"
                    src={product.imagenes[0]}
                    alt={product.nombre}
                />
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.nombre}</div>
                <p className="text-gray-700 text-base">{product.descripcion}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.precio}</span>
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default ProductCard;