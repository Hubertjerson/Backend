let template = Handlebars.compile(`
        <h1>Vista de Productos</h1>
            <br>
            {{#if productos}}
                <div class="table-responsive">
                    <table class="table table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Foto</th>
                        </tr>
                        {{#each productos}}
                            <tr>
                                <td>{{this.title}}</td>
                                <td>$ {{this.price}}</td>
                                <td><img width="50" src={{this.thumbnail}} alt="not found"></td>
                            </tr>
                        {{/each}}
                    </table>
                </div>
            {{else}}
                <h3 class="alert alert-warning">No se encontraron productos</h3>
            {{/if}}
        <a href="/" class="btn btn-info m-3">Volver</a>
`)
const socket = io();
const inputtitle = document.getElementById("title");
const inputprice = document.getElementById("price");
const inputthumbnail = document.getElementById("thumbnail");


function sendProduct() {
    if(!inputtitle.value || !inputprice.value ||! inputthumbnail.value)  {
        return alert("Debe ingresar todos los campos");
    }
    inputtitle.disabled = true;
    inputprice.disabled = true;
    inputthumbnail.disabled = true;
    const product = {
        title: inputtitle.value,
        price: inputprice.value,
        thumbnail: inputthumbnail.value
    }
    socket.emit("guardar", product);
    productInput.value = "";
    productInput.focus();
}
socket.on('productos', data => {
    const html = template({
        productos: data,
    })
    document.getElementById("lista-productos").innerHTML = html;
})