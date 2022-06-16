const inputtitle = document.getElementById("title");
const inputprice = document.getElementById("price");


function sendProduct() {
    if(!inputtitle.value)  {
        return alert("Debe ingresar todos los campos");
    }
    inputtitle.disabled = true;
    inputprice.disabled = true;
    const product = {
        title: inputtitle.value,
        price: inputprice.value,
    }
    socket.emit("guardar", product);
}

socket.on('actualizar-productos', data => {
    console.log(data);
    const pintarProducto = data.map(data => {
        return (`
        <h1>Vistas de Productos</h1>
            <br>
                <div class="table-responsive">
                    <table class="table table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>${data.title}</td>
                            <td>${data.price}</td>
                        </tr>
                    </table>
                </div>`)
    }).join(" ");
    document.getElementById("lista-productos").innerHTML = pintarProducto;
})