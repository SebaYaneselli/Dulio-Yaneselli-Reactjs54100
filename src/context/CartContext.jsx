import { createContext, useEffect, useState } from "react";


const CartContext = createContext();

export default CartContext;

const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoLocal);

    const agregarAlCarrito = (item, cantidad) => {
            
        const itemAgregado = {...item, cantidad};
        const carritoYaExiste = [...carrito];
        const yaAgregado = carritoYaExiste.find((producto) => producto.id === itemAgregado.id);
    
        if (yaAgregado) {
            const index = carritoYaExiste.findIndex((producto) => producto.id === itemAgregado.id);
            carritoYaExiste[index].cantidad += cantidad;
            setCarrito(carritoYaExiste);
        }   else {
            setCarrito([...carrito, itemAgregado]);
        }
    }

    const quitarDelCarrito = (id) => {
        const carritoActualizado = carrito.map((producto) => {
            if (producto.id === id) {
                if (producto.cantidad > 1) {
                    return { ...producto, cantidad: producto.cantidad - 1 };
                } else {
                    return null;
                }
            } else {
                return producto;
            }
        }).filter(Boolean);

        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    
    const cartItemCount = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    }
    
    const precioTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.valor * producto.cantidad, 0);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito]);

    return (<CartContext.Provider value={ {carrito, agregarAlCarrito, cartItemCount, precioTotal, quitarDelCarrito, vaciarCarrito} }>
        {children}
    </CartContext.Provider>)
}