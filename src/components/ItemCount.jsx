import React from "react";


const ItemCount = ( {cantidad, restarCantidad, sumarCantidad, agregarAlCarrito} ) => {
  return (
    <div>
        <div className="itemCount">
            <button onClick={restarCantidad} className="itemCountBoton">-</button>
            <p>{cantidad}</p>
            <button onClick={sumarCantidad} className="itemCountBoton">+</button>
        </div>
        <button className="agregarAlCarritoClass itemCountBoton" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;