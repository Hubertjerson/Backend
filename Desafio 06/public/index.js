let template = Handlebars.compile(`
        <h1>Vista de Productos</h1>
            <br>
            {{#if hayProductos}} 
                <div class="table-responsive">
                    <table class="table table-dark">
                        <tr> <th>Nombre</th> <th>Precio</th> <th>Foto</th></tr>
                        {{#each hayProductos}}
                            <tr> <td>{{this.title}}</td> <td>$ {{this.price}}</td> <td><img width="50" src={{this.thumbnail}} alt="not found"></td> </tr>
                        {{/each}}
                    </table>
                </div>
            {{else}}  
                <h3 class="alert alert-warning">No se encontraron productos</h3>
            {{/if}}
        <a href="/" class="btn btn-info m-3">Volver</a>
`)

const inputtitle = document.getElementById("title");
const inputprice = document.getElementById("price");
const inputthumbnail = document.getElementById("thumbnail");
const button = document.getElementById("button");

button.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = inputtitle.value;
    const price = inputprice.value;
    const thumbnail = inputthumbnail.value;

    if (title.length == 0 || price.length == 0 || thumbnail.length == 0) { return alert("debe ingresar todos los campos") }

    socket.emit('guardar', {
        title: title,
        price: price,
        thumbnail: thumbnail,
    })

    inputtitle.value = "";
    inputprice.value = "";
    inputthumbnail.value = "";
})

socket.on('actualizar_producto', data => {
    const html = template({
        hayProductos: data,
    })
    document.getElementById("lista-productos").innerHTML = html;
})