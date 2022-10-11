import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const ItemProducto = ({producto}) => {
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
            <Button variant="danger">Borrar</Button>
          </td>
        </tr>
    );
};

export default ItemProducto;