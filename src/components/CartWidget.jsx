import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartWidget = () => {

    const {cartItemCount} = useContext(CartContext)

    return (
        <div className="cart-widget">
            <img src="../images/carritodecompra.png" id="imagencarrito"/>
            <span className="badge">{cartItemCount()}</span>
        </div>
    );
}

export default CartWidget;
