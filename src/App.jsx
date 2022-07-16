import {BrowserRouter,Routes, Route, Navigate,  } from "react-router-dom";


import ItemsListConatiner from './componentes/ItemsListConatiner/ItemsListConatiner';
import NavBar from './componentes/Nav/NavBar';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsDetail from "./componentes/ItemsDetailCont/ItemsDetail";
import Cart from "./componentes/Cart/Cart";
import Fallo from "./componentes/404/Fallo";
import NavLogo from "./componentes/Nav/NavLogo";
import { CartProvider } from "./componentes/CartContex/CartContex";

function App() {
  return (
<CartProvider>
  <BrowserRouter>
  <div className="App">
    <NavLogo/>
    <NavBar/>
    <Routes>
      <Route index path='/' element={<ItemsListConatiner/>}/>
      <Route  path='/categoria/:categoriaId' element={<ItemsListConatiner/>}/>
      <Route  path='/detail/:Id' element={<ItemsDetail/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route path="/error" element={ <Fallo/>}/>
      <Route path="*" element={ <Navigate to="/error"/>  }/>
    </Routes>
  </div>
  </BrowserRouter>
</CartProvider>
  );
}
 
export default App;
