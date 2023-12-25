import  React, { Component } from 'react';
import {  Routes, Route , NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from './components/inventory/product.component';
import ProductList from './components/inventory/product-list.component';
import AddProduct from './components/inventory/add-product.component';

class App extends Component { 
render():React.ReactNode {
  return (
      
    <div>
     
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <NavLink to={"/products"} className="navbar-brand">
            EMR - Inventory
          </NavLink>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/products"} className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/add"} className="nav-link">
                Add
              </NavLink>
            </li>
          </div>
        </nav>
        
    
        <div className="container mt-3">
          <Routes>
            <Route   path="products" element={<ProductList/>} />
            <Route path="add" element={<AddProduct/>} />
            <Route path=":products/:id" element={<Product/>} />
          </Routes>
        </div>
        
    </div>
   
    );
  }
}

export default App;
