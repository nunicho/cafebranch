import React, { useForm, useEffect, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useParams, useNavigate } from "react-router-dom"
import {editarProductoAPI, obtenerProductoAPI } from '../helpers/queries';
import Swal from "sweetalert2";



function DetalleProducto() {
  // traer el parámetro de la ruta
const {id} = useParams();

 const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  useEffect(()=>{
    obtenerProductoAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        //cargar los datos de la repuesta en el formulario
        setValue('nombreProducto', respuesta.dato.nombreProducto )
        setValue('precio', respuesta.dato.precio )
        setValue('categoria', respuesta.dato.categoria )
        setValue('imagen', respuesta.dato.imagen )
        console.log(respuesta)
      }else{
        Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])

  const onSubmit = (producto) =>{
    console.log(producto)
    //aqui quiero enviar la peticion a la api para actualizar los datos del producto
    editarProductoAPI(id,producto).then((respuesta)=>{
      if(respuesta.status===200){
        Swal.fire('Producto actualizado', 'el producto fue actualizado correctamente', 'success');
        //redireccionar
        navegacion('/administrador');
      }else{
        Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  }
 
  return (
     
     <div className="posts-container">                        
      <Card onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'row'}}>
      <Card.Img variant="top  w-25 " src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body onSubmit={handleSubmit(onSubmit)} >
        <Card.Title {...register('nombreProducto')}></Card.Title>
        <hr></hr>
        <Card.Text>
        <Badge bg="success">Dulce</Badge>
        </Card.Text>
        <p className="my-3 fw-bold">Precio: $300</p>
       </Card.Body>
    </Card>
    
      </div>
  );
}

export default DetalleProducto;



/*
import React, { useEffect, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useParams} from "react-router-dom"
import { obtenerProductoAPI } from '../helpers/queries';
import Swal from "sweetalert2";


function DetalleProducto() {
  // traer el parámetro de la ruta
const {id} = useParams();

 
useEffect  (()=>{ 
obtenerProductoAPI(id).then((respuesta)=>{
if(respuesta.status===200){

}else{
  Swal.fire('Ocurrió un error', 'Intente este paso en unos minutos', 'error')
}
  console.log(respuesta)
})
 },[])
 
  return (
     
     <div className="posts-container">                        
      <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Card.Img variant="top  w-25 " src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>NOMBRE</Card.Title>
        <hr></hr>
        <Card.Text>
        <Badge bg="success">Dulce</Badge>
        </Card.Text>
        <p className="my-3 fw-bold">Precio: $300</p>
       </Card.Body>
    </Card>
    
      </div>
  );
}

export default DetalleProducto;
  
*/