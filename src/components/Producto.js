import React from "react";

const Producto = ({producto,carrito, agregarProducto,productos}) => {

    const {nombre, precio, id} = producto

    //agregar producto a carrito
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id )[0];
        agregarProducto([
            //restoperator para copiar el arreglo
            ...carrito,
            producto
        ]);
    }

    //Elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        //Colocar los productos en el state
        agregarProducto(productos)
    }

    return ( 
        <div>
            <h3>{nombre}</h3>
            <p>Bs.{precio}</p>

                { productos
                ?
                    (            
                        <button 
                        type="button"
                        id="comprar"
                        onClick={ () => seleccionarProducto(id) }
                        >Comprar</button>
                    )
                : 
                    (            
                        <button 
                        type="button"
                        onClick={ () => eliminarProducto(id)}
                        >Eliminar</button>
                    )
                }
        </div>
     );
}
 
export default Producto;