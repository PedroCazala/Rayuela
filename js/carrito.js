const verCarrito = () =>{
    let contenedor = $('#contenedorCarrito');
    contenedor.html('');
    for(const producto of carrito){
    contenedor.append(
        `<article>
            <div class="article__foto"><img src="../images/productos/${producto.img}" alt="${producto.nombre}"></div>
            <div class="article__nombre">${producto.nombre}</div>
            <div class="article__cantidad"><p>Cantidad</p> 
                <input type="number" class="cantidad" id="cantidad_${producto.id}" min="1" max="100" value="${producto.cantidad}">
                <a class="botonProducto" onclick="sumar(${producto.id})">+</a>
                <a class="botonProducto" onclick="restar(${producto.id})" >-</a>
            </div>
            <div class="article__precioUnitario">$${producto.precio}</div>
            <div class="article__precio">Total: $${producto.cantidad*producto.precio}</div>
            <a class="botonProducto" onclick="borrarDeCarrito(${producto.id})">Borrar producto</a>
        </article>`
    )}
}
verCarrito();

//Vaciar carro
$('.vaciarCarrito').click(() =>{
    carrito = [];
    //carritoAMostrar = [];
    actualizarCarritoEnLocalStorage();
    cantidadDeProductosEnCarrito();
    verCarrito();
    // console.log('entro a vaciar carrito')
}

)
//sumar o restar productos del carrito

const sumar = (idProducto) => {
    let cantidad = parseInt($(`#cantidad_${idProducto}`).val())+1;
    for(const producto of carrito){
            if(producto.id === idProducto){
                producto.cantidad = cantidad; 
            }
        }
    actualizarCarritoEnLocalStorage();
    verCarrito();
}

const restar = (idProducto) => {
    let cantidad = parseInt($(`#cantidad_${idProducto}`).val()) - 1;
    if (cantidad <= 0){
        borrarDeCarrito(idProducto)
    }else{
        for(const producto of carrito){
            if(producto.id === idProducto){
                producto.cantidad = cantidad; 
            }
        }
    }
    actualizarCarritoEnLocalStorage();
    verCarrito();
}

const borrarDeCarrito = (idProducto) =>{
    for (const producto of carrito){
        if(producto.id === idProducto){
            console.log(producto)
            carrito.splice(carrito.indexOf(producto),1)
        }
        // if(item){
        //     //console.log('borrar, ',producto.nombre);
        //     console.log(carrito.indexOf(item))
            
        // }
    }
    actualizarCarritoEnLocalStorage();
    cantidadDeProductosEnCarrito();
    verCarrito();
}
//borrarDeCarrito();