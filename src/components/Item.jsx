import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
            <div className="item-class">
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="item-data">
                    <h2 className="item-nombre">{producto.nombre}</h2>
                    <h4>${producto.valor} U$</h4>
                    <p>Categoría: {producto.categoria}</p>
                    <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                </div>
            </div>
    )
}

export default Item;
