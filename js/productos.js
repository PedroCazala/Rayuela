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
const tijeramapedessentials13cm = new Productos (3,"Tijera maped essentials 13cm", 130, 4, "tijeras", false, 10,'tijeramapedessentials13cm.jpg',1);
const lapizBicEvolutionNegro = new Productos (4,"Lapiz bic evolution negro", 30, 10, "lapices", false, 25,'lapizBicEvolutionNegro.jpg',1);
const lapiceraBicTrazoFino = new Productos (5,"Lapicera bic trazo fino", 67, 30, "lapiceras", ['azul', 'negro','rojo', 'verde'], false,'lapiceraBicTrazoFino.jpg',1);
const lapiceraBicTrazoGrueso = new Productos(6,"Lapicera bic trazo grueso",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapiceraBicTrazoGrueso.jpg',1);
const cuadernilloLedesmaAvon22x29x84h = new Productos(7,"Cuadernillo Ledesma Avon 22x29 x84h",140,20,"cuadernos",false,false,'cuadernilloLedesmaAvon22x29x84h.png',1);
const lapicesDeColorFaberCastellx24 = new Productos(8,"Lapices de color Faber Castell x24",200,5,"lapices",false,false,'lapicesDeColorFaberCastellx24.jpg',1);
const acrilicoEq = new Productos(9,"Acrílico EqArte",120,30,"pinturas",['azul', 'negro','rojo', 'verde','etc'],false,'acrilicoEq.jpg',1);
const carpetaLamaBaseOpacaA4 = new Productos(10,"Carpeta Lama base opaca A4",78,20,"carpetas",false,false,'carpetaLamaBaseOpacaA4.jpg',1);
const cintaDePapelFijapel24mm = new Productos(11,"Cinta de papel fijapel 24mm",250,20,"cintas",['azul', 'negro','rojo', 'verde'],false,'cintaDePapelFijapel24mm.jpg',1);
const cuadenoExitoN1Lunares = new Productos(12,"Cuadeno exito n°1 lunares rayado 48h",350,50,"cuadernos",['azul', 'negro','rojo', 'verde','etc'],false,'cuadenoExiton1Lunares.jpg',1);
const cintaDePapelFijapel18mm = new Productos(13,"Cinta de pepel Fijapel 18mm",200,20,"cintas",false,false,'cintaDePapelFijapel18mm.jpg',1);
const cuadenoExitoN1 = new Productos(14,"Cuadeno Exito n°1 rayado 48h",320,11,"cuadernos",['azul', 'negro','rojo', 'verde','etc'],false,'cuadenoExitoN1.jpg',1);
const cuadernoDeComunicacionesTriunfante = new Productos(15,"Cuaderno de comunicaciones Triunfante",158,20,"cuadernos",false,false,'cuadernoDeComunicacionesTriunfante.jpg',1);
const lapicerasBicCristalUpx8 = new Productos(16,"Lapiceras bic cristal up x8",356,20,"lapiceras",false,false,'lapicerasBicCristalUpx8.jpg',1);
const lapicesDeColorFaberCastellPastelx10 = new Productos(17,"Lapices de color Faber Castell pastel x10",420,20,"lapices",false,false,'lapicesDeColorFaberCastellPastelx10.jpg',1);
const lapicesDeColorFaberCastellCortosx6 = new Productos(18,"Lapices de color Faber Castell cortos x6",210,20,"lapices",false,false,'lapicesDeColorFaberCastellCortosx6.jpg',1);
const lapizNegroMaped = new Productos(19,"Lapiz negro Maped",48,20,"lapiceras",false,false,'lapizNegroMaped.jpg',1);
const temperaPlaycolorPastelx6 = new Productos(20,"Tempera playcolor pastel x6",130,20,"pinturas",['azul', 'negro','rojo', 'verde'],false,'temperaPlaycolorPastelx6.jpg',1);
const temperaPlaycolorPote = new Productos(21,"Tempera Playcolor pote",140,20,"pinturas",false,false,'temperaPlaycolorPote.jpg',1);
const temperaPlaycolorx10 = new Productos(22,"Tempera Playcolor x10",132,20,"pinturas",['azul', 'negro','rojo', 'verde','etc'],false,'temperaPlaycolorx10.jpg',1);
const pinturaParaTelaDelArte = new Productos(23,"Pintura para tela DelArte",142,20,"pinturas",['azul', 'negro','rojo', 'verde','etc'],false,'pinturaParaTelaDelArte.png',1);
const resmaAutorA475gr = new Productos(24,"Resma autor A4 75gr",460,20,"resmas",false,false,'resmaAutorA475gr.jpg',1);
const resmaAutorOficio75gr = new Productos(25,"Resma autor oficio 75gr",540,20,"resmas",false,false,'resmaAutorOficio75gr.jpg',1);

//Array productos
const productos=[];

const productosAMostrar = [];


productos.push(plasticola40g);
productos.push(voligoma30g);
productos.push(tijeramapedessentials13cm);
productos.push(lapizBicEvolutionNegro);
productos.push(lapiceraBicTrazoFino);
productos.push(lapiceraBicTrazoGrueso);
productos.push(cuadernilloLedesmaAvon22x29x84h);
productos.push(lapicesDeColorFaberCastellx24);
productos.push(acrilicoEq);
productos.push(carpetaLamaBaseOpacaA4);
productos.push(cintaDePapelFijapel24mm);
productos.push(cuadenoExitoN1Lunares);
productos.push(cintaDePapelFijapel18mm);
productos.push(cuadenoExitoN1);
productos.push(cuadernoDeComunicacionesTriunfante);
productos.push(lapicerasBicCristalUpx8);
productos.push(lapicesDeColorFaberCastellPastelx10);
productos.push(lapicesDeColorFaberCastellCortosx6);
productos.push(temperaPlaycolorPastelx6);
productos.push(lapizNegroMaped);
productos.push(temperaPlaycolorPastelx6);
productos.push(temperaPlaycolorx10);
productos.push(pinturaParaTelaDelArte);
productos.push(resmaAutorA475gr);
productos.push(resmaAutorOficio75gr);

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
let ordenar = document.getElementById('orden');
function ordenarProductos(){
    let eligio = ordenar.value;

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

if (!ordenar){console.log('no hay orden');}
else{
    ordenar.addEventListener("change", ordenarProductos);
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

//_________________||CARRITO||_________________
carrito = JSON.parse(localStorage.getItem('Carrito'));
if(carrito === null){
    carrito = [];
    localStorage.setItem('Carrito', JSON.stringify(carrito))
}

actualizarCarritoEnLocalStorage = ()=>{
    return localStorage.setItem('Carrito', JSON.stringify(carrito));
}

const cantidadDeProductosEnCarrito = () => {
    let mostrarEnSpan = $('#cantidadProductos');
    let suma=0;
    carrito.forEach(producto => {
        suma += parseInt(producto.cantidad)
    });
    mostrarEnSpan.html(suma);
}

const agregarProductoAlCarrito =(idProducto) => {
    let productoComprado = productos.find(x => x.id == idProducto);
    let cantidadValue = $('#num_'+idProducto).val();
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


// //filtar por atibuto para mostrar productos específicos
// filtrarPorAtributo = (atributoNombre, atributoValor) => {
//     // Se debe poner el nombre del atributo entre '' y si el valor es texto también
//     for(const producto of productos){
//         if(atributoNombre == 'id' && atributoValor == producto.id){
//             console.log( producto.id);
//             return producto;
//         }else if(atributoNombre == 'nombre' && atributoValor == producto.nombre){
//             console.log( producto.nombre);
//         }else if(atributoNombre == 'categoria' && atributoValor == producto.categoria){
//             console.log( producto.categoria, producto.nombre);
//             return producto.nombre;
//         }
//     }

// }
// filtrarPorAtributo('categoria','adhesivos')
// $('#contenedorEscolares').html(filtrarPorAtributo('categoria','adhesivos'));