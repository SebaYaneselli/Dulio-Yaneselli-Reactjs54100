import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/data.js";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Colleción 2024");
    const categoria = useParams().categoria;

    useEffect(() => {
        
        const productosFirebase = collection(db, "productos");

        const quer = categoria ? query(productosFirebase, where("categoria", "==", categoria)) : productosFirebase;

        getDocs(quer)
            .then((resp) => {
                
                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id:doc.id};
                    })
                )
            }) 

    }, [categoria])
    return (
        <div className="item-list-container">
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    );
}

export default ItemListContainer;
