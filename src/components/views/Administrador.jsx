import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { consultarAPI } from '../helpers/queries';
import ItemProducto from './Producto/ItemProducto';



const Administrador = () => {
const [productos, setProductos]=useState([])


useEffect  (()=>{
//opción 1

consultarAPI().then((respuesta)=>{
console.log(respuesta)
setProductos(respuesta)
})

    // opcion 2
    // const consultaPrueba = async()=>{
    //   const prueba = await consultarAPI();
    //   console.log(prueba);
    // }
    // consultaPrueba();

  
},[])

return (
    <div className="container">
        <div className="d-flex justify-content-between my-3">
            <h2>Productos Disponibles</h2>
             <Button variant="primary">Agregar</Button>{' '} 
        </div>
    <Table striped bordered hover>          
      <thead>                
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de la Imagen</th>
          <th>Categoría</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
             productos.map((producto)=> <ItemProducto key={producto.id} producto={producto}></ItemProducto> )
        }
     </tbody>
    </Table>
    </div>
  );
};

export default Administrador;