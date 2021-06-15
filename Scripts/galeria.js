const galeria = {
    archivos: ["Fondo.jpg", "cruz.jpg", "ignacio.jpg", "morro.jpg", "piedra.jpg", "retana.jpg"],
    imagen: null,
    indice: 0,
    maximo: 5,
    iniciar: function() {
        if (galeria.imagen === null) {
            galeria.imagen = document.querySelector("img");
        }
        document.querySelector("button#siguiente").addEventListener("click", galeria.siguiente, false);
        document.querySelector("button#anterior").addEventListener("click", galeria.anterior, false);
    },
    siguiente: function() {
        if (galeria.indice < galeria.maximo) {
            galeria.indice++;
        } else {
            galeria.indice = 0;
        }
        galeria.imagen.setAttribute("src", "../Recursos/Imagenes/" + galeria.archivos[galeria.indice]);
    },
    anterior: function() {
        if (galeria.indice > 0) {
            galeria.indice--;
        } else {
            galeria.indice = galeria.maximo;
        }
        galeria.imagen.setAttribute("src", "../Recursos/Imagenes/" + galeria.archivos[galeria.indice]);
    }
}
document.addEventListener("DOMContentLoaded", galeria.iniciar, false);