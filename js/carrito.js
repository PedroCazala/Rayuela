const verCarrito = () =>{
    let contenedor = $('#contenedorCarrito');
    for(const producto of carrito)
    contenedor.append(
        `<article>
            <div class="article__foto"><img src="../images/productos/${producto.img}" alt="${producto.nombre}"></div>
            <div class="article__nombre">${producto.nombre}</div>
            <div class="article__cantidad"><p>Cantidad</p> 
                <input type="number" class="cantidad" min="1" max="100" value="1">
                <a class="botonProducto" onclick="borrarDeCarrito(${producto.id})">Borrar producto</a>
            </div>
            <div class="article__precioUnitario">$${producto.precio}</div>
            <div class="article__precio">Total: Ver</div>
        </article>`)
}
verCarrito();

//Viendo
const borrarDeCarrito = (id) =>{
    for (const producto of carrito){
        if(carrito.find(elemento => elemento.id == id)){
            console.log(carrito[producto.id]);
        }
        
    }

    
}
//borrarDeCarrito();