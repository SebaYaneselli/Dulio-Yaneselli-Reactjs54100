import React from 'react';
import Item from './Item.jsx';

const ItemList = ({productos, titulo})=> {

    const toCapital = (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div>
            <h1>{toCapital(titulo)}</h1>
            <main className="cajitaItems d-flex justify-content-center gap-5 my-5 mx-auto w-75 flex-wrap">{
                    productos.map((producto) => {
                        return (
                            <Item key={producto.id} producto={producto}/>
                        )
                    })
                }
            </main>
        </div>
    )
};

export default ItemList;
