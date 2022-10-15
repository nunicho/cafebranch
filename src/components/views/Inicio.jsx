import React, { useEffect, useState } from 'react';
import CardProducto from './Producto/CardProducto';
import { consultarAPI } from '../helpers/queries';

const Inicio = ({producto}) => {
    const [productos, setProductos]=useState([])

useEffect  (()=>{

consultarAPI().then((respuesta)=>{
console.log(respuesta)
setProductos(respuesta)
})

},[])


    return (
        <div>
            <h1 className="my-5 text-center">BIENVENIDOS</h1>
            <hr></hr>
            <div className="row">
            {
             productos.map((producto)=> <CardProducto key={producto.id} producto={producto} setProductos={setProductos}></CardProducto> )
        }
            </div>

           
        </div>
    );
};

export default Inicio;