import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrearProducto = () => {
return (
    <div className="container">
        <div>
            <h2>Nuevo Producto</h2>
            <hr></hr>

        </div>
    <Form>
      <Form.Group className="mb-3" controlId="nuevoNombreProducto">
        <Form.Label>Nombre Producto</Form.Label>
        <Form.Control type="text" placeholder="Ej. Café" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder="Ej. 50" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select>
           <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
       Guardar
      </Button>
    </Form>
    </div>
  );
}

export default CrearProducto;