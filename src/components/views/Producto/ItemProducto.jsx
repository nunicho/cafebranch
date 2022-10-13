import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { consultarAPI } from '../../helpers/queries';

const ItemProducto = ({producto, setProductos}) => {
const borrarProductoAPI = () =>{
Swal.fire({
  title: '¿Estás seguro? de eliminar el producto',
  text: "No se puede revertir este paso",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Borrar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    //realizar la consulta a la API
    borrarProductoAPI(producto.id).then((respuesta)=>{
      if(respuesta.status === 200){
        // actualizar el state productos o la tabla
      consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setProducto(respuesta)
      })
      Swal.fire(
      'Producto borrado!',
      'El producto fue correctamente borrado',
      'success'
    )
      } else {
      'Se produjo un error',
      'Pruebe hacer esta operación más tarde',
      'success'
      }
    })
  
  }
})

  } 
  
  return (
        <tr>
            {/* <td>{props.producto.id}</td>*/}
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>${producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td>
            <Button variant="warning">Editar</Button>
            <Button variant="danger" onClick={borrarProducto}>Borrar</Button>
          </td>
        </tr>
    );
};

export default ItemProducto;