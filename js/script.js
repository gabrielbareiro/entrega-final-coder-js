// declaro variables
let carrito = []
let datosJson = [];
let contador = 0;

// agrego los datos del archivo .json

$().ready(() => {
    $.getJSON("datos/datos.json", (datos, respuesta) => {
        if (respuesta == "success") {
            datosJson = datos;
            //Agrego los articulos al html
            for (const articulo of datosJson) {
                generarArticuloJQ(articulo);
            }
        }
        //funcion para agregar los articulos al html
        function generarArticuloJQ(articulo) {
            $("#bebidas").append(cards(articulo));
        }
        // evento agregar un producto al carrito
        $('.btnCompra').click(function () {
            let = agregarProducto = carrito.find(producto => producto.id == this.id);
            if (agregarProducto != undefined) {
                agregarProducto.add();
                contador++;
            } else {
                let = productoCarrito = new Bebida(datosJson.find(producto => producto.id == this.id));
                carrito.push(productoCarrito);
                contador++;
            }
            generarCarrito(carrito);
        });
        // confirmar la compra de los productos del carrito
        $('#enviar').click(function (e) {
            e.preventDefault();
            if (carrito.length > 0) {
                $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(carrito), function (data, status) {
                    if (status === "success") {
                        // muestro una animacion si el envio es correcto
                        $("#confirmado").html(`<div class="confirmado ">CONFIRMADO!</div>`);
                        $("#confirmado").fadeOut(2000, );
                        contador = 0;
                        generarCarrito(carrito);
                        $('#carrito').empty();
                        carrito = [];
                    }
                });
            }
        });
    });
})
// evento enviar el formulario
$('#form').submit(function (e) {
    e.preventDefault();
    let suNombre = $(":text");
    $.post("https://jsonplaceholder.typicode.com/posts", suNombre, function (data, status) {
        if (status === "success") {
            $("#ingresar").text(suNombre[0].value);
            $('#exampleModal').modal('hide');
        }
    })
});
