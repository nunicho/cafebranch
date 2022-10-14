// archivo que nos sirva para hacer las consultas a la API (json-server)

const URL = 'http://localhost:3004/productos';
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
        const productoBuscado = await respuesta.json();
        // console.log(listaProductos)
        return productoBuscado
    }catch(error){
        console.log(error)
    }
}