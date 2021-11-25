class Productos{
    constructor(id, nombre, precio, stock, categoria, colores, descuento,img,cantidad){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.colores = colores;
        this.descuento = descuento;
        this.img = img;
        this.cantidad = cantidad;
    }
    preciofinal(){
        return this.precio - this.precio*this.descuento/100;
    }
}


//   .:PRODUCTOS INGRESADOS:.
const plasticola40g = new Productos (1,"Plasticola 40g", 98, 5, "adhesivos", false, false,'plasticola40.jpg',1);
const voligoma30g = new Productos (2,"Voligoma 30g", 100, 7, "adhesivos", false, false,'voligoma30.jpg',1);
const tijeramapedessentials13cm = new Productos (3,"Tijera maped essentials 13cm", 130, 4, "tijeras", false, 10,'tijera maped essentials 13cm.jpg',1);
const lapizbicevolutionnegro = new Productos (4,"Lapiz bic evolution negro", 30, 10, "lapices", false, 25,'lapiz-negro-bic-evolution.jpg',1);
const lapicerabictrazofino = new Productos (5,"Lapicera bic trazo fino", 67, 30, "lapicesras", ['azul', 'negro','rojo', 'verde'], false,'lapicera-bic-trazo-fino.jpg',1);
const lapicerabictrazogrueso = new Productos(6,"Lapicera bic trazo grueso",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg',1);
const cuadernilloLedesmaAvon22x29x84h = new Productos(7,"Cuadernillo Ledesma Avon 22x29 x84h",140,20,"cuadernos",false,false,'cuadernilloLedesmaAvon22x29x84h.png',1);
const lapicesdecolorFaberCastellx24 = new Productos(8,"Lapices de color Faber Castell x24",200,5,"lapices",false,false,'lapicesdecolorFaberCastellx24.jpg',1);
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
// const lapicerabictrazogrueso = new Productos(6,"",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');

//Array productos
const productos=[];

const productosAMostrar = [];


productos.push(plasticola40g);
productos.push(voligoma30g);
productos.push(tijeramapedessentials13cm);
productos.push(lapizbicevolutionnegro);
productos.push(lapicerabictrazofino);
productos.push(lapicerabictrazogrueso);
productos.push(cuadernilloLedesmaAvon22x29x84h);
productos.push(lapicesdecolorFaberCastellx24);
// IMPORTANTE: El siguiente for debe estar debajo de todos los push a productos, porque los lee y los ingresa a productosAMostrar
for(let producto of productos){
    productosAMostrar.push(producto);
}

let variedadProductos = productos.length;
console.log('variedad de productos disponibles: ' + variedadProductos);

//-----funciones para ordenar-----
function ordenDeMenor(){
    productosAMostrar.sort((a, b) => {
        return a.precio-b.precio
    });
}
function ordenDeMayor(){
    productosAMostrar.sort((a, b) => {
        return b.precio-a.precio
    });
}
function ordenAlfabeticamente(){
    productosAMostrar.sort((a, b) => {
        if(a.nombre > b.nombre){
            return 1;
        }else if(a.nombre < b.nombre){
            return -1;
        }else{
            return 0;
        }
    });
}

ordenAlfabeticamente();
//Crear catalogo basandonos en el array 'productos'
function mostrarProductos(){
    let contenedor = $('#contenedorProductos')
    for(const producto of productosAMostrar){
        let contenido = 
        `<div class="producto" id='${producto.id}'>
            <img id="imgProducto" src="../images/productos/${producto.img}" alt="${producto.nombre}">
            <h3 class="tituloProducto">${producto.nombre}</h3>
            <p id='precioProducto'><b>$${producto.precio}</b></p>
            <p>Cantidad</p>
            <form action="">
                <input type="number" class="cantidad" id='num_${producto.id}' min="1" max="100" value="${producto.cantidad}">
                <buttom class="botonProducto"  id='btn_${producto.id}' onclick=agregarProductoAlCarrito(${producto.id})>Agregar</buttom>
            </form>
        </div>
        `
        contenedor.append(contenido);
    }
}
mostrarProductos();
//Ocultar Productos
function ocultarProductos(){
    let contenedor = document.getElementById('contenedorProductos');
    contenedor.innerHTML = "";
}

//Ordenar de acuerdo al selector
let orden = document.getElementById('orden');
function ordenarProductos(){
    let eligio = orden.value;

    if(eligio == 'az'){
        ocultarProductos();
        ordenAlfabeticamente();
        mostrarProductos();
    }else if (eligio == 'menor$'){
        ocultarProductos();
        ordenDeMenor();
        mostrarProductos();
    }else if (eligio == 'mayor$'){
        ocultarProductos();
        ordenDeMayor();
        mostrarProductos();
    }
}

if (!orden){console.log('no hay orden');}
else{
    orden.addEventListener("change", ordenarProductos);
}
// Filtrar
let buscador =  $('#buscador');


const filtrar = () => {
    texto = buscador.val().toLowerCase();

    productosAMostrar.splice(0);
    for(const producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            
            productosAMostrar.push(producto);
        }
    }
    console.log(productosAMostrar);
}
buscador.keyup(filtrar);
buscador.keyup(ocultarProductos);
buscador.keyup(mostrarProductos);
actualizarCarritoEnLocalStorage = ()=>{
    return localStorage.setItem('Carrito', JSON.stringify(carrito));
}

//   .:Carrito:.
const cantidadDeProductosEnCarrito = () => {
    let mostrarEnSpan = $('#cantidadProductos');
    let cantidadCarro = JSON.parse(localStorage.getItem('Carrito'));
    mostrarEnSpan.html(cantidadCarro.length);
}
//    agregar productos al carrito
let carrito = JSON.parse(localStorage.getItem('Carrito'));

const agregarProductoAlCarrito =(idProducto) => {
    let productoComprado = productos.find(x => x.id == idProducto);
    let cantidadValue = $('#num_'+idProducto).val();
    console.log(cantidadValue);
    // if (!carrito){
    //     carrito=[]
    // }
    if(!carrito.find(producto => producto.id === idProducto)){
        carrito.push(productoComprado);
        for(const producto of carrito){
            if(producto.id === idProducto){
                producto.cantidad = parseInt(cantidadValue); 
            }
        }
    } else{
        for(const producto of carrito){
            if(producto.id === idProducto){
                producto.cantidad = producto.cantidad + parseInt(cantidadValue); 
            }
        }
    } 
    
    actualizarCarritoEnLocalStorage();
    cantidadDeProductosEnCarrito();
}

cantidadDeProductosEnCarrito();
