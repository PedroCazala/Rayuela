const urlprueba = 'https://jsonplaceholder.typicode.com/posts';
const URLprovArg ="https://apis.datos.gob.ar/georef/api/provincias";

function ordenAlfabeticamente2(array){
    array.sort((a, b) => {
        if(a.nombre > b.nombre){
            return 1;
        }else if(a.nombre < b.nombre){
            return -1;
        }else{
            return 0;
        }
    });
}

const llenarSelectProvincia = (idSelect,url) => {
    $.get(url, function (respuesta, estado){
        ordenAlfabeticamente2(respuesta.provincias);
        if(estado === 'success'){
            let misDatos = respuesta;
            for (const dato of misDatos.provincias){
                idSelect.append(`<option value="${dato.id}">${dato.nombre}</option`)
            }
        }
    });
}

llenarSelectProvincia($('#provincia'),URLprovArg);

const llenarSelectMunicipio = (idSelect,url) => {
    $.get(url, function (respuesta, estado){
        ordenAlfabeticamente2(respuesta.municipios);
        if(estado === 'success'){
            let misDatos = respuesta;
            idSelect.html('<option disabled selected value="porDefecto">--Elije una opción--</option>');
            for (let dato of misDatos.municipios){
                idSelect.append(`<option value="${dato.id}">${dato.nombre}</option`)
                }
        }
    });
}

$('#provincia').change(function () {
    let valorProvincia = $('#provincia').val();
    let URLmunicipio =  `https://apis.datos.gob.ar/georef/api/municipios?provincia=${valorProvincia}&campos=id,nombre&max=500`;
    
    llenarSelectMunicipio($('#municipio'),URLmunicipio)
    //console.log(URLmunicipio)
})