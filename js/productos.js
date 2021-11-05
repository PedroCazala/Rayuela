class Productos{
    constructor(id, nombre, precio, stock, categoria, colores, descuento,img){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.colores = colores;
        this.descuento = descuento;
        this.img = img;
    }
    preciofinal(){
        return this.precio - this.precio*this.descuento/100;
    }
}


//   .:PRODUCTOS INGRESADOS:.
const plasticola40g = new Productos (1,"Plasticola 40g", 98, 5, "adhesivos", false, false,'plasticola40.jpg');
const voligoma30g = new Productos (2,"Voligoma 30g", 100, 7, "adhesivos", false, false,'voligoma30.jpg');
const tijeramapedessentials13cm = new Productos (3,"Tijera maped essentials 13cm", 130, 4, "tijeras", false, 10,'tijera maped essentials 13cm.jpg');
const lapizbicevolutionnegro = new Productos (4,"Lapiz bic evolution negro", 30, 10, "lapices", false, 25,'lapiz-negro-bic-evolution.jpg');
const lapicerabictrazofino = new Productos (5,"Lapicera bic trazo fino", 67, 30, "lapicesras", ['azul', 'negro','rojo', 'verde'], false,'lapicera-bic-trazo-fino.jpg');
const lapicerabictrazogrueso = new Productos(6,"Lapicera bic trazo grueso",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false,'lapicera-bic-trazo-grueso.jpg');
//Array productos
const productos=[];
productos.push(plasticola40g);
productos.push(voligoma30g);
productos.push(tijeramapedessentials13cm);
productos.push(lapizbicevolutionnegro);
productos.push(lapicerabictrazofino);
productos.push(lapicerabictrazogrueso);

let variedadProductos = productos.length;
console.log('variedad de productos disponibles: ' + variedadProductos);

//funciones para ordenar
function ordenDeMenor(){
    productos.sort((a, b) => {
        return a.precio-b.precio
    });
}
function ordenDeMayor(){
    productos.sort((a, b) => {
        return b.precio-a.precio
    });
}
function ordenAlfabeticamente(){
    productos.sort((a, b) => {
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
    for(const producto of productos){
        let contenedor = 
        `<div class="producto" id='${producto.id}'>
            <img id="imgProducto" src="../images/productos/${producto.img}" alt="${producto.nombre}">
            <h3 class="tituloProducto">${producto.nombre}</h3>
            <p id='precioProducto'><b>$${producto.precio}</b></p>
            <p>Cantidad</p>
            <form action="">
                <input type="number" class="cantidad" id='num_${producto.id}' min="1" max="100" value="1">
                <buttom class="botonProducto"  id='btn_${producto.id}' onclick=agregarProductoAlCarrito(${producto.id})>Agregar</buttom>
            </form>
        </div>
        `
        $('#contenedorProductos').append(contenedor);
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
orden.addEventListener("change", ordenarProductos);

//Filtrar
const filtrar = () =>{
    let buscador = document.getElementById('buscador');
    buscador.onkeyup = () =>{console.log(buscador.value);}
}




//   .:Carrito:.
const cantidadDeProductosEnCarrito = () => {
    let mostrarEnSpan = document.getElementById('cantidadProductos');
    let cantidadCarro = JSON.parse(localStorage.getItem('Carrito'));
    mostrarEnSpan.innerHTML = cantidadCarro.length;

}
//    agregar productos al carrito
let carrito = JSON.parse(localStorage.getItem('Carrito'));

const agregarProductoAlCarrito =(idProducto) => {
    let productoComprado = productos.find(x => x.id == idProducto);
    
    if (!carrito){
        carrito = [];
    }
    carrito.push(productoComprado);
    console.log(carrito);
    localStorage.setItem('Carrito', JSON.stringify(carrito));

    cantidadDeProductosEnCarrito();
}

cantidadDeProductosEnCarrito();


/*
<Comento para que no moleste>

let producto1 = prompt('Introduce el primero de dos productos a comprar, recuerda que las opciones son: plasticola40g - voligoma30g - tijeramapedessentials13cm - lapizbicevolutionnegro - lapicerabictrazofino - lapicerabictrazogrueso');
let producto2 = prompt('Introduce el segundo de dos productos a comprar, recuerda que las opciones son: plasticola40g - voligoma30g - tijeramapedessentials13cm - lapizbicevolutionnegro - lapicerabictrazofino - lapicerabictrazogrueso');

if(producto1 == "plasticola40g"){producto1 = Object.assign({},plasticola40g);}
if(producto1 == "voligoma30g"){producto1 = Object.assign({},voligoma30g);}
if(producto1 == "tijeramapedessentials13cm"){producto1 = Object.assign({},tijeramapedessentials13cm);}
if(producto1 == "lapizbicevolutionnegro"){producto1 = Object.assign({},lapizbicevolutionnegro);}
if(producto1 == "lapicerabictrazofino"){producto1 = Object.assign({},lapicerabictrazofino);}
if(producto1 == "lapicerabictrazogrueso"){producto1 = Object.assign({},lapicerabictrazogrueso);}

if(producto2 == "plasticola40g"){producto2 = Object.assign({},plasticola40g);}
if(producto2 == "voligoma30g"){producto2 = Object.assign({},voligoma30g);}
if(producto2 == "tijeramapedessentials13cm"){producto2 = Object.assign({},tijeramapedessentials13cm);}
if(producto2 == "lapizbicevolutionnegro"){producto2 = Object.assign({},lapizbicevolutionnegro);}
if(producto2 == "lapicerabictrazofino"){producto2 = Object.assign({},lapicerabictrazofino);}
if(producto2 == "lapicerabictrazogrueso"){producto2 = Object.assign({},lapicerabictrazogrueso);}

console.log('El primer producto que compraste es: ' + producto1.nombre + ', el precio es de: $' + producto1.precio);
console.log('El segundo producto que compraste es: ' + producto2.nombre + ', el precio es de: $' + producto2.precio);

console.log('El total a pagar, sin descuentos incluidos es de: ' + (producto1.precio+producto2.precio));
*/