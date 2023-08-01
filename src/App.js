import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getAuthUser } from './redux/actions/actionsUser';
import './App.css';
import Dashboard from "./components/pages/Dashboard"
import Home from "./components/pages/Home"
import ProductList from './components/pages/ProductList';
import ProductCard from './components/pages/ProductCard';
import {Routes ,Route, Link} from "react-router-dom"
import AppNavBar from "./components/AppNavBar"
import { Button } from 'reactstrap'
import ProductModal from './components/pages/ProductModal';
import Cart from './components/pages/Cart'
function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAuthUser())
},[])
  return (
    <div className="App">
     
      <AppNavBar />
 
  <Routes>

   <Route path="/dashboard" element={<Dashboard />} />
   <Route path='/' element={<ProductList />}/>
   <Route path='/cart/:id' element={<Cart />}/>
  </Routes>
    </div>
  );
}

export default App;