function cards(articulo) {
    return `<div class="col-md-3">
                <div class="card cardProducto shadow">
                <img src="${articulo.imagen}" class="card-img-top" alt="Imagen ${articulo.id}">
                <div class="card-body">
                    <h5 class="card-title text-center ">${articulo.articulo}</h5>
                    <div class="row align-items-start">
                        <div class="col">
                        <p class="card-text text-center textCard">Precio: $ ${articulo.precio}</p>
                        </div>
                        <div class="col">
                        <p id= "disponible" class="card-text text-center textCard">disponibles ${articulo.stock}</p>    
                    </div>  
                </div>
                </div>
                <div class="text-center">
                    <button id="${articulo.id}" class="btnCompra btn btn-outline-dark text-center">AÑADIR</button>
                </div>
            </div>`
}
function generarCarrito(a){
    $('#carrito').empty();
    $('.sumatoria').text(`${contador}`);
    for (const producto of a) {
        $('#carrito').append(`
                    <div class="row productosAgregados">
                        <div class="col-6 lista">${producto.articulo}</div>
                        <div class="col-2 lista text-center">$${producto.precio}</div>
                        <div class="col-3 lista text-center">${producto.cantidad}</div>
                        <button class="btnEliminar btn col-1 lista text-center"><i id="${producto.id}" class="far fa-minus-square"></i></button>
                    </div>`);
    }
    $('.btnEliminar').click(function (e) {
        borrar(e.target.id);
        generarCarrito(a);
    });  
}
// borro los productos usando control de cantidades
function borrar(id) {
    const objeto = carrito.find(x => x.id == id);
    // verifico si hay mas de uno
    if(objeto.cantidad == 1){
        const idProducto = carrito.indexOf(objeto);
        carrito.splice(idProducto, 1);
        contador--;
    }else{
        objeto.rest();
        contador--;
    }
}
