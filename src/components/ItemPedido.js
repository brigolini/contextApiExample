import React from "react";
import {addItem} from "../context/Actions";
import {useState} from "react";
import {useAppContext} from "../context/AppContext";

const ItemPedido = () => {
    const [state, dispatch] = useAppContext();
    const [value,setValue] = useState("");
    const handleBuyItem = () => {
        dispatch(addItem(value));
    };

    return (
        <>
            <input type={"text"} size={60} value={value}
                   onChange={(inputREf)=>setValue(inputREf.target.value)}/>
            <button onClick={handleBuyItem}>Incluir item do pedido</button>
        </>
    );

};

export default ItemPedido;
