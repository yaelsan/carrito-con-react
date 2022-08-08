import {BrowserRouter,Routes, Route, Navigate,  } from "react-router-dom";


import ItemsListConatiner from './componentes/ItemsListConatiner/ItemsListConatiner';
import NavBar from './componentes/Nav/NavBar';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsDetail from "./componentes/ItemsDetailCont/ItemsDetail";
import Cart from "./componentes/Cart/Cart";
import Failed from "./componentes/404/Failed";
import NavLogo from "./componentes/Nav/NavLogo";
import { CartProvider } from "./componentes/CartContex/CartContex";
import Footer from "./componentes/footer/Footer";

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
      <Route path="/error" element={ <Failed/>}/>
      <Route path="*" element={ <Navigate to="/error"/>  }/>
    </Routes>
    <Footer/>
  </div>
  </BrowserRouter>
</CartProvider>
  );
}
 
export default App;
