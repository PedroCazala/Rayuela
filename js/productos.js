class Productos{
    constructor(nombre, precio, stock, categoria, colores, descuento){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.colores = colores;
        this.descuento = descuento;
    }
    preciofinal(){
        return this.precio - this.precio*this.descuento/100;
    }
}


//   .:PRODUCTOS INGRESADOS:.
const plasticola40g = new Productos ("Plasticola 40g", 98, 5, "adhesivos", false, false);
const voligoma30g = new Productos ("Voligoma 30g", 100, 7, "adhesivos", false, false);
const tijeramapedessentials13cm = new Productos ("Tijera maped essentials 13cm", 130, 4, "tijeras", false, 10);
const lapizbicevolutionnegro = new Productos ("Lapiz bic evolution negro", 30, 10, "lapices", false, 25);
const lapicerabictrazofino = new Productos ("Lapicera bic trazo fino", 67, 30, "lapicesras", ['azul', 'negro','rojo', 'verde'], false);
const lapicerabictrazogrueso = new Productos("Lapicera bic trazo grueso",58,20,"lapiceras",['azul', 'negro','rojo', 'verde'],false);

const productos=[];
productos.push(plasticola40g);
productos.push(voligoma30g);
productos.push(tijeramapedessentials13cm);
productos.push(lapizbicevolutionnegro);
productos.push(lapicerabictrazofino);
productos.push(lapicerabictrazogrueso);
console.log(productos);
let cantidadProductos = productos.length;
console.log('Cantidad de productos disponibles: ' + cantidadProductos);

productos.sort((a, b) => {
    if(a.precio > b.precio){
        return 1;
    }else if(a.precio < b.precio){
        return -1;
    }else{
        return 0;
    }
});
console.log(productos);
console.log('A continuación se muestran los productos, ordenados de menor precio a mayor:');
    for(const producto of productos){
        console.log(producto.nombre + ' Precio: $' + producto.precio);
    }

//   .:Carrito:.
//      >>>>QUEDA COMENTADO PARA QUE NO MOLESTE AL INGRESAR<<<<

/*
alert('En las siguientes entradas, se te solicitara dos ingresos de productos para comprar, para ello debes usar los siguientes códigos plasticola40g - voligoma30g - tijeramapedessentials13cm - lapizbicevolutionnegro - lapicerabictrazofino - lapicerabictrazogrueso')
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