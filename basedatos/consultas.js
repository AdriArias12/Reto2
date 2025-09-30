function obtenerProductos(categoria = "") {
    /*let lista_filtrados = [];
    for (let int i=0; i<lista_productos.length; i++) {
        if(lista_productos[i].codigo_categoria == categoria) {
            lista_filtrados.push(lista_productos[i]);
        }
    }
    return lista_filtrados;
    */

    if (categoria === null || categoria == "") {
        return lista_productos;
    } else {
        let lista_filtrados = lista_productos.filter(producto => producto.codigo_categoria == categoria);
        return lista_filtrados;
    }

}

// funcion que devuelve la informacion de un producto de acuerdo a su codigo

function obtenerProductoXCodigo(codigo) {
    return lista_productos.find(producto => producto.codigo === codigo);


}
//Funciones relacionadas con el carrito de compras

function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    let costoTotal = 0;

    carrito = obtenerCarrito();

    carrito.forEach((elemento, posicion) => {
        let li = document.createElement("li");
        li.textContent = `${elemento.nombre} - $${elemento.precio}`; li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-1 border-bottom border-dark">
                    <div class="row">
                        <h6 class="my-0">${elemento.nombre}</h6>
                        <small>${elemento.precio.toLocaleString("es-CO")}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto('${posicion}')"> 
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });
    let etiqueta_total = document.getElementById("etiqueta_total");
    etiqueta_total.innerText = costoTotal.toLocaleString("es-CO");

}

let diccionario = {
    nombre:"carrito",
    items:[]
};

function obtenerCarrito() {
    const str = localStorage.getItem("carrito");
    if(!str) {
        carrito = [];
    } else {
        carrito = JSON.parse(str);
    }
    return carrito;
}

function agregarProducto(producto, mostrar=true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar===true){
        mostrarCarrito();
    }
}

function eliminarProducto(posicion) {
    carrito.splice(posicion, 1);
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    // Almacenar la información del carrito de compras en el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

