import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardProducto = ({producto}) => {


return (  
    <Card className="col-12 col-md-4 col-lg-3 p-2">
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text className="my-3">${producto.precio}</Card.Text>
        <hr></hr>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
    </Card>
    
  );
}


export default CardProducto;

