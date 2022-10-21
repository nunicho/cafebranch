import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useParams} from "react-router-dom"
import { obtenerProductoAPI } from '../helpers/queries';
import Swal from "sweetalert2";


const DetalleProducto = () => {
  
const [nombreProducto, setNombreProducto] = useState ();
const [categoria, setCategoria] = useState ();
const [precio, setPrecio] = useState ();
const [imagen, setImagen] = useState ();

// traer el parámetro de la ruta
const {id} = useParams();


useEffect(()=>{
    obtenerProductoAPI(id).then((respuesta)=>{
      if(respuesta.status===200){
        setNombreProducto(respuesta.dato.nombreProducto)
        setCategoria(respuesta.dato.categoria)
        setPrecio(respuesta.dato.precio)
        setImagen(respuesta.dato.imagen)
      }else{
      Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])
 
  return (
     
     <div className="posts-container">                        
      <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Card.Img variant="top  w-25 " src={imagen} />
      <Card.Body>
        <Card.Title>{nombreProducto} </Card.Title>
        <hr></hr>
        <Card.Text>
        <Badge bg="success">{categoria}</Badge>
        </Card.Text>
        <p className="my-3 fw-bold">${precio}</p>
       </Card.Body>
    </Card>
    
      </div>
  );
}

export default DetalleProducto;

