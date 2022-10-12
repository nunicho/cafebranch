import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {useState} from "react"


function Login() {


    // ESTO ES PARA EL PASSWORD
const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


const {register, handleSubmit, formState:{errors}} = useForm( 
  {defaultValues: {
    mail: "",
    password: "",
  }});

const onSubmit = (datos) =>{
  console.log(datos)
  console.log('desde nuestra función submit')
}




  return (
    <div className="container mainSection">
        <div>
            <h2>Login</h2>
            <hr></hr>

        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="mail">
        <Form.Label>Mail</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese el mail"
         {...register('mail',{
          required:'El mail es obligatorio',
          pattern:{
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:'Debe ingresar un mail válido.'
          },
        })}
        
       />
       <Form.Text className="text-danger">{errors.mail?.message}</Form.Text>
       </Form.Group>
       <Form.Group className="mb-3" controlId="nuevoPrecio">
        
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type={passwordShown ? "text" : "password"} 
        placeholder="Ingrese el password" 
         {...register('password',{
          required:'Es obligatorio ingresar una password',
          pattern:{
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:'La contraseña debe tener entre 8 carateres y contener al menos: 1 minúscula, 1 mayúscula y 1 número o 1 caracter especial.'
          },
        })}
        
         />
         <button onClick={togglePassword}>Ver contraseña</button>
        <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
       </Form.Group>               
      <Button variant="primary" type="submit">
       Enviar
      </Button>
    </Form>
    </div>
  );
}

export default Login;