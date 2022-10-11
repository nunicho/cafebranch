import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import CardProducto from './components/views/Producto/CardProducto'
import DetalleProducto from './components/views/DetalleProducto'
import ItemProducto from './components/views/Producto/ItemProducto'
import CrearProducto from './components/views/Producto/CrearProducto'
import EditarProducto from './components/views/Producto/EditarProducto'



function App() {
  return (
 <BrowserRouter>
 <Menu></Menu>
  <Routes>
    <Route exact path='/' element={<Inicio></Inicio>}></Route>
    <Route exact path='/Administrador' element={<Administrador></Administrador>}></Route>
    {/* <Route exact path='/Footer' element={<Footer></Footer>}></Route> */}
    {/* <Route exact path='/Menu' element={<Menu></Menu>}></Route> */}
    <Route exact path='/CardProducto' element={<CardProducto></CardProducto>}></Route>
    <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
    <Route exact path='/ItemProducto' element={<ItemProducto></ItemProducto>}></Route>
    <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
    <Route exact path='/administrar/editar/:id  ' element={<EditarProducto></EditarProducto>}></Route>
    <Route  path='*' element={<Error404></Error404>}></Route>
  </Routes>
 <Footer></Footer>
 </BrowserRouter>
  );
}

export default App;
