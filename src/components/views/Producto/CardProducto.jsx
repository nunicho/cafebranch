import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const CardProducto = ({producto}) => {


return (  
    <Card className="col-12 col-md-4 col-lg-3 p-2">
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text className="my-3">${producto.precio}</Card.Text>
        <hr></hr>
        <Link className="btn btn-danger" to={`/DetalleProducto/${producto._id}`}>Ver más</Link>
      </Card.Body>
    </Card>
    
  );
}


export default CardProducto;

