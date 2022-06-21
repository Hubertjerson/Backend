const socket = io();
const inputtitle = document.getElementById("title");
const inputprice = document.getElementById("price");
//const inputthumbnail = document.getElementById("thumbnail");



function sendProduct() {
    if (!inputtitle.value && !inputprice.value) {
        return alert("Debe ingresar todos los campos");
    }

    inputtitle.disabled = true;
    inputprice.disabled = true;
    //inputthumbnail.disabled = true;
    const product = {
        title: inputtitle.value,
        price: inputprice.value,
        //thumbnail: inputthumbnail.value
    }
    inputtitle.value = "";
    inputprice.value = "";
    //inputthumbnail.value = "";
    socket.emit("guardar", product);
}
socket.on('productos', data => {
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
                            <!--<th>Foto</th>-->
                        </tr>
                        <tr>
                            <td>${data.title}</td>
                            <td>${data.price}</td>
                            <!--<td style="width: 50px"><img src="${data.thumbnail}" width="60" height="60"></td>-->
                        </tr>
                    </table>
                </div>`)
    }).join(" ");
    document.getElementById("lista-productos").innerHTML = pintarProducto;
})
