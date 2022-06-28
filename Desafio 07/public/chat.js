
const nameInput = document.getElementById("nombre");
const messageInput = document.getElementById("mensaje");
const sendMessage = document.getElementById('sendMessage');
const tbodymessages = document.getElementById('messages');


socket.emit(`incommingMessage`);

sendMessage.addEventListener('click', () => {
    const message = {
        nombre: nameInput.value,
        text: messageInput.value,
    }

    nameInput.value = "";
    messageInput.value = "";

    socket.emit('messageInput', message);
});

//Servidor --> Cliente: Envio los datos para agregar a la tabla.
socket.on(`message`, message => {
    mensajes = `
        <tr>
            <th scope="row">
                ${message[0].id}
            </th>
            <td>
                ${message[0].nombre}
            </td>
            <td>
                ${message[0].text}
            </td>
        </tr>
    `;
    tbodymessages.innerHTML += mensajes;
});

socket.on(`allMessages`, message => {

    message.forEach(mensajes => {
        product = `
            <tr>
                <th scope="row">
                    ${mensajes.id}
                </th>
                <td>
                    ${mensajes.nombre}
                </td>
                <td>
                    ${mensajes.text}
                </td>
            </tr>
        `;
        tbodymessages.innerHTML += mensajes;
    });
});