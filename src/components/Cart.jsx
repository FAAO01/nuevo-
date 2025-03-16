import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, product) => acc + product.precio, 0);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cart.map((product) => (
                            <li key={product.id} className="flex items-center justify-between py-2 border-b">
                                <span>{product.nombre} - ${product.precio}</span>
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Total: ${total.toFixed(2)}</p>
                        <button
                            onClick={clearCart}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Vaciar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;