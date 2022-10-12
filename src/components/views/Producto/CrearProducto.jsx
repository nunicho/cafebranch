import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const CrearProducto = () => {

const {register, handleSubmit, formState:{errors}} = useForm( 
  {defaultValues: {
    nombreProducto: "",
    precio: 1,
    imagen: '',
    categoría:   ''
  }});

const onSubmit = (datos) =>{
  console.log(datos)
  console.log('desde nuestra función submit')
}


return (
    <div className="container">
        <div>
            <h2>Nuevo Producto</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="nuevoNombreProducto">
        <Form.Label>Nombre Producto</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ej. Café"
        {...register('nombreProducto', {
          required:'Este dato es obligatorio', 
          minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 20 caracteres'
          }
        
        })} />
       <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoPrecio">
        <Form.Label>Precio</Form.Label>
       
        <Form.Control 
        type="text" 
        placeholder="Ej. 50" 
        {...register('precio',{
          required: 'El precio es un valor requerido',
          min:{
            value: 1,
            message: 'El precio como mínimo debe ser de $1'
          },
          max:{
            value: 10000,
            message: 'El precio del producto máximo es $10000'
          }
        })}
         />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoImagen">          
        
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" 
        {...register('imagen',{
          required:'La URL  de la imagen es obligatoria',
          pattern:{
              value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message:'Debe ingresar una URL válida'
          },
        })}
               
        />
       <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3">

        <Form.Label>Categoría</Form.Label>
        <Form.Select {...register ('categoria', {
          required:'Debe seleccionar una categoría'
        })}>
           <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
        </Form.Select>
         <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
       Guardar
      </Button>
    </Form>
    </div>
  );
}

export default CrearProducto;