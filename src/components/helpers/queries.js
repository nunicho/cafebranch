// archivo que nos sirva para hacer las consultas a la API (json-server)

// const URL = 'http://localhost:3004/productos' // dirección de Json Server
const URL = 'http://localhost:4000/apicafe/productos';
// tipos de peticiones 
// petición GET que trae todos los productos o un producto  
// petición POST, crear un producto, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un producto

// peticion GET que trae todos los productos


// petición GET que trae todos los productos
export const consultarAPI = async() =>{
    try{

        const respuesta = await fetch (URL);
        const listaProductos = await respuesta.json();
        // console.log(listaProductos)
        return listaProductos
    }catch(error){
        console.log(error)
    }
}

export const creaProductoAPI = async(producto) =>{
    try{
        const respuesta = await fetch (URL, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const borrarProductoAPI = async(id) =>{
    try{
        const respuesta = await fetch (`${URL}/${id}`, {
            method: "DELETE", 
         
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}


export const obtenerProductoAPI = async(id) =>{
    try{
        const respuesta = await fetch (URL+'/'+id);
        const productoBuscado = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
       return productoBuscado
    }catch(error){
        console.log(error)
    }
}


export const editarProductoAPI = async(id, datosActualizados)=>{
    try{
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosActualizados)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}


const URLusuarios = 'http://localhost:3004/usuarios';
// tipos de peticiones 
// petición GET que trae todos los usuarios o un usuario  
// petición POST, crear un usuario, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un usuario


// petición GET que trae todos los productos
export const consultarUsuarioAPI = async(data) =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios);
        const listaUsuarios = await respuestaUsuarios.json();
        // console.log(listaProductos)
        return listaUsuarios
    }catch(error){
        console.log(error)
    }
}

export const creaUsuarioAPI = async(usuario) =>{
    try{
        const respuestaUsuarios = await fetch (URLusuarios, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}

export const borrarUsuarioAPI = async(id) =>{
    try{
        const respuestaUsuarios = await fetch (`${URLusuarios}/${id}`, {
            method: "DELETE", 
         
        });
        return respuestaUsuarios;
    }catch(error){
        console.log(error)
    }
}


export const obtenerUsuarioAPI = async(mail) =>{
    try{

        const respuestaUsuarios = await fetch (URLusuarios+'/');
        const usuarioBuscado = {
        dato: await respuestaUsuarios.json(),
        status: respuestaUsuarios.status
        }
        return usuarioBuscado
    }catch(error){
        console.log(error)
    }
}

