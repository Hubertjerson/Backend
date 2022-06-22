
const nameInput = document.getElementById("nombre");
const messageInput = document.getElementById("mensaje");

function sendMessage() {

    if (!nameInput.value) {
        return alert("debe ingresar un nombre");
    }

    nameInput.disabled = true;
        const message = {
        nombre: nameInput.value,
        text: messageInput.value
    };
    socket.emit("incomingMessage", message);
    messageInput.value = "";
    messageInput.focus();
}

socket.on('chat', message => {
    const texto = message.map(mensaje => {
        return (`<div>
            <strong>${mensaje.nombre}</strong>
            <em>${mensaje.text}</em>
            </div>`
        );
    }).join(" ");

    document.getElementById("messages").innerHTML = texto;
});

//socket.on('usersList', users => {
//    console.log('usersList: ', users);
//    const liUses = Object.values(users).map(user => {
//        return (`
//            <li class="m-1 border-botton">
//            <strong> ${user}</strong>
//            </li>
//        `)
//    }).join(" ");
//
//    document.getElementById("users-list").innerHTML = liUses;
//});

//socket.on('changeName', () => {
//    nameInput.disabled = false;
//    return alert("Nombre ya utilizado");
//})