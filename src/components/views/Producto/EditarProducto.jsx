  import { useEffect } from "react";
  import { Form, Button } from "react-bootstrap";
  import { useParams, useNavigate } from "react-router-dom";
  import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
  import { useForm } from "react-hook-form";
  import Swal from "sweetalert2";

const EditarProducto = () => {
  //traer el parametro de la ruta
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
    <div className="container">
        <div>
            <h2>Editar Producto</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="editarNombreProducto">
        <Form.Label>Nombre Producto</Form.Label>
        <Form.Control type="text" 
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
        
        })} 
        />
        <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarPrecio">
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
        })} />
       <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="editarImagen">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control type="text" placeholder="https://images.pexels.com/photos/887853" 
        {...register('imagen',{
          required:'La URL  de la imagen es obligatoria',
          pattern:{
              value: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
              message:'Debe ingresar una URL válida'
          },
        })}
             />
      <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
        {...register ('categoria', {
          required:'Debe seleccionar una categoría',
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

export default EditarProducto;