$(document).ready(fuction= () =>{
    $('header').css({
    });
    $('header').append(
        `<p id='contenedorUser'>Si claro que si</p>`
    );
    $('#contenedorUser').css({
        'color': 'white',
        'text-align':'center',
        'grid-area':'nana'
    })
    $('#usuario').click(()=>{
        // alert('lalala')
        $('#contenedorUser').toggle();
    })
})

