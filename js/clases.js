class Bebida {
    constructor(a) {
        this.id = a.id;
        this.articulo = a.articulo;
        this.precio = a.precio;
        this.stock = a.stock;
        this.cantidad = 1
    }
    venta() {
        if (this.stock > 0){
            this.stock--;
        }
    }
    add() {
        this.cantidad++;
    }
    rest() {
        this.cantidad--;
    }
}