import logo from './logo.svg';
import React,{ Fragment, useState } from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

//  carrito

  const producto = {

  }
  //crea listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa Manhatan', precio: 190 },
    { id: 2, nombre: 'Camisa Polonesa', precio: 300 },
    { id: 3, nombre: 'Camisa Mant', precio: 220 },
    { id: 4, nombre: 'Camisa Boss', precio: 110 },
  ]);

  //State para un carrito de compras
  const [carrito, agregarProducto ] = useState([]);

  //get fecha
  const fecha = new Date().getFullYear();
  
  return (
    <Fragment>
        <Header 
          titulo='Titulo Virtual' 
        />

        
        <h1>Lista de Productos</h1>
        {productos.map(producto =>(
          <Producto
            key={producto.id}
            producto={producto}
            productos = {productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}

        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

        <Footer
          fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
