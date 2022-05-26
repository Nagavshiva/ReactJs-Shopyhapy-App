import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import {Navigate} from "react-router-dom";


function App() {

  return (
       <> 
       <Navbar/>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/products'  element={<Products/>}/>
         <Route exact path='/products/:id'  element={<Product/>}/>
         <Route exact path='/cart/:id'  element={<Cart/>}/>
         <Route exact path='/cart'  element={<Navigate replace to ="/Products"/>}/>
       </Routes>
      
       </>
  );
}

export default App;
