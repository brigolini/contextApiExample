import React,{useContext} from "react";
import {useAppContext} from "../context/AppContext";

const ListaItems = ()=>{
    const [state, dispatch] = useAppContext();
    const {listItems} = state;
    if (!listItems) return null;
    return (
        <ul>
            {
                listItems.map(item=><li>{item}</li>)
            }
        </ul>
    )

}

export default ListaItems;
