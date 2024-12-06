// Funcionalidad del reproductor de música
document.getElementById("play-pause").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸️"; // Cambio a pausa
    } else {
        audio.pause();
        this.textContent = "▶️"; // Cambio a play
    }
});

document.getElementById("next").addEventListener("click", function() {
    // Lógica para cambiar a la siguiente canción (aquí solo se simula)
    alert("Avanzando a la siguiente canción...");
});

document.getElementById("prev").addEventListener("click", function() {
    // Lógica para cambiar a la canción anterior (aquí solo se simula)
    alert("Volviendo a la canción anterior...");
});

document.getElementById("volume").addEventListener("input", function() {
    var audio = document.getElementById("audio");
    audio.volume = this.value / 100;
});

// Funcionalidad del slider de imágenes
let currentIndex = 0;
const images = document.querySelectorAll(".slider-images img");

document.getElementById("prev-slide").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

document.getElementById("next-slide").addEventListener("click", function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const slider = document.querySelector(".slider-images");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Funcionalidad de comentarios
document.getElementById("formComentario").addEventListener("submit", function(event) {
    event.preventDefault();

    var comentarioText = document.getElementById("comentario").value;
    if (comentarioText.trim() === "") return;

    var commentList = document.getElementById("comentarios-lista");

    // Crear el comentario
    var comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerHTML = `
        <p>${comentarioText}</p>
        <button onclick="editComment(this)">Editar</button>
        <button onclick="deleteComment(this)">Eliminar</button>
    `;

    commentList.appendChild(comment);

    // Limpiar textarea
    document.getElementById("comentario").value = '';
});

// Editar comentario
function editComment(button) {
    var comment = button.parentElement;
    var text = comment.querySelector("p").textContent;
    var newText = prompt("Edita tu comentario:", text);
    if (newText !== null) {
        comment.querySelector("p").textContent = newText;
    }
}

// Eliminar comentario
function deleteComment(button) {
    var comment = button.parentElement;
    comment.remove();
}
