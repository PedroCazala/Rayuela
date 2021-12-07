const verCarrito = () =>{
    let contenedor = $('#contenedorCarrito');
    contenedor.html('');
    for(const producto of carrito){
    contenedor.append(
        `<article>
            <div class="article__foto"><img src="../images/productos/${producto.img}" alt="${producto.nombre}"></div>
            <div class="article__nombre">${producto.nombre}</div>
            <div class="article__cantidad">
                <p>Cantidad</p> 
                <div class="cant">
                    <a class="botonProducto menos" onclick="restar(${producto.id})" >-</a>
                    <input type="number" class="cantidad numero" id="cantidad_${producto.id}" min="1" max="100" value="${producto.cantidad}">
                    <a class="botonProducto mas" onclick="sumar(${producto.id})">+</a>
                </div>
            </div>
            <div class="article__precioUnitario">$${producto.precio}</div>
            <div class="article__precioYBorraProducto">
                <p> </p>
                <div>Total: $${producto.cantidad*producto.precio}</div>
                <a class="botonProducto borrarProducto" onclick="borrarDeCarrito(${producto.id})">Borrar producto</a>
            </div>
        </article>`
    )}
}
verCarrito();
actualizar=()=>{
    actualizarCarritoEnLocalStorage();
    cantidadDeProductosEnCarrito();
    verCarrito();
    totalCarrito();
}
//Vaciar carro
$('.vaciarCarrito').click(() =>{
    carrito = [];
    actualizar();
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
    actualizar();
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
    actualizar();
}

const borrarDeCarrito = (idProducto) =>{
    for (const producto of carrito){
        if(producto.id === idProducto){
            console.log(producto)
            carrito.splice(carrito.indexOf(producto),1)
        }
    }
    actualizar();
}
//Total carrito
const totalCarrito =()=>{
    let total = $('#totalCarrito');
    let suma=0;
    carrito.forEach(producto => {
        suma += parseInt(producto.precio * producto.cantidad)
    });
    total.html('$'+suma);
}
totalCarrito();