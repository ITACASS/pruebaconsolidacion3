// barra.js

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navbarMenu = document.getElementById("navbarMenu");

    menuButton.addEventListener("click", function () {
        // Cambiar la visibilidad del menú
        if (navbarMenu.style.display === "block") {
            navbarMenu.style.display = "none";
        } else {
            navbarMenu.style.display = "block";
        }
    });
});

// chats.js

document.addEventListener("DOMContentLoaded", function () {
    const conversationItems = document.querySelectorAll(".conversation-item");

    conversationItems.forEach(item => {
        item.addEventListener("click", function () {
            // Marcar la conversación como leída
            item.classList.remove("unread");
        });
    });
});

// Seleccionamos todos los elementos de la lista de conversaciones
const chatItem = document.querySelectorAll('.chat-item');

// Agregar un evento de clic a cada elemento de la lista
chatItem.forEach(item => {
    item.addEventListener('click', () => {
        // Obtener el ID del chat que debemos mostrar
        const chatId = item.getAttribute('data-chat');

        // Cambiar la información del encabezado (nombre y foto)
        const username = item.querySelector('h3').innerText;
        const userImg = item.querySelector('img').src;
        document.getElementById('chat-username').innerText = username;
        document.getElementById('chat-user-img').src = userImg;

        // Ocultar todas las ventanas de chat
        document.querySelectorAll('.chat-messages').forEach(chat => {
            chat.style.display = 'none';
        });

        // Mostrar la ventana de chat correspondiente
        document.getElementById(chatId).style.display = 'block';
    });
});

// Función para abrir/cerrar el dropdown
document.querySelector('.attach-btn').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('show');
});

// Función para adjuntar archivo
function attachFile(type) {
    alert('Adjuntando ' + type);
    document.querySelector('.dropdown').classList.remove('show');
}

// Cerrar el dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.attach-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// JavaScript para mostrar/ocultar la lista de conversaciones en móviles
const toggleBtn = document.querySelector('.toggle-btn');
const conversationList = document.querySelector('.conversation-list');

toggleBtn.addEventListener('click', function() {
    // Alternar la visibilidad de la lista de conversaciones
    conversationList.classList.toggle('open');
    
    // Cambiar el texto del botón según el estado de la lista
    if (conversationList.classList.contains('open')) {
        toggleBtn.textContent = 'Ocultar conversaciones';
    } else {
        toggleBtn.textContent = 'Mostrar conversaciones';
    }
});

document.getElementById("send-btn").addEventListener("click", function() {
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() !== "") {
        // Crear un nuevo mensaje
        const message = document.createElement("div");
        message.classList.add("message", "sender");
        message.textContent = messageInput.value;

        // Agregar el mensaje al chat
        chatBox.appendChild(message);

        // Limpiar el campo de entrada
        messageInput.value = "";

        // Scroll al último mensaje
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
