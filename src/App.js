import logo from './logo.svg';
import './App.css';
import ItemPedido from "./components/ItemPedido";
import ListaItems from "./components/ListaItems";
import React from "react"
import {AppProvider} from "./context/AppContext"

function App() {
    return (
        <>
            <AppProvider>
                <ItemPedido/>
                <ListaItems/>
            </AppProvider>
        </>
    );
}

export default App;
