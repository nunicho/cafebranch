import React from 'react';
import CardProducto from './Producto/CardProducto';

const Inicio = () => {
    return (
        <div>
            <h1 className="my-5 text-center">BIENVENIDOS</h1>
            <hr></hr>
            <div className="row">
                <CardProducto></CardProducto>

            </div>
        </div>
    );
};

export default Inicio;