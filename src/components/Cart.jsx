import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const valoresIniciales = {
    name: "",
    phone: "",
    email: "",
};

const Cart = () => {

    const [comprador, setComprador] = useState(valoresIniciales);
    const {carrito, precioTotal, quitarDelCarrito, vaciarCarrito} = useContext(CartContext);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setComprador((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleOrden = () => {

        const orden = {
            comprador,
            carrito,
            total: precioTotal(),
        };

        const db = getFirestore();
        const coleccionDeOrdenes = collection (db, "ordenes");


        if (!comprador.name || !comprador.phone || !comprador.email) {
            alert("Por favor, complete todos los campos obligatorios.");
        } else {
            if (carrito.length >= 1) {
                addDoc(coleccionDeOrdenes, orden).then(({id})=> {
                    if(id) {
                        alert("Su orden: " + id + "ha sido completada.")
                        vaciarCarrito();
                    }
                });
            } else {
                alert("El carrito se encuentra vacio.")
            }
        }
    }

    

    return(
        <div className='container'>
            <h1>CARRITO DE COMPRA</h1>

            {carrito.length > 0 ?
                carrito.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagen} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>${item.valor * item.cantidad} (${item.valor} c/u)</p>
                        <button onClick={()=> quitarDelCarrito(item.id)} className="quitarDelCarrito">Quitar del carrito</button>
                    </div>
                ))
            :   <div>
                    <h2 className="carritoVacio">El carrito se encuentra vacio.</h2>
                </div>}
        <h2>DATOS DE COMPRA</h2>
        <form>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" value={comprador.name} name="name" onChange={handleChange} />
            </div> 
            <div>
                <label htmlFor="phone">Celular:</label>
                <input type="number" value={comprador.phone} name="phone" onChange={handleChange} />
            </div> 
            <div>
                <label htmlFor="email">Mail:</label>
                <input type="email" value={comprador.email} name="email" onChange={handleChange} />
            </div> 
        </form>
        <h2>TOTAL CARRITO: ${precioTotal()}</h2>
        <button className="comprarCarrito" onClick={()=> handleOrden()}>CONFIRMAR COMPRA</button>
        </div>
)}

export default Cart;
