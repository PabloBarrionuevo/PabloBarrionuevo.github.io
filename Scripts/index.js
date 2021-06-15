const integrador = {
    iframe: null,
    pagina: "",
    seleccion: null,
    iniciar: function() {
        console.log("Iniciar trabajo integrador WEB 1");
        document.querySelectorAll("#Menu a, #Opciones a").forEach(x => {
            x.addEventListener("click", function(e) {
                integrador.irA(e, x);
            });
        });
    },
    irA: function(evento, elemento) {
        const pagina = elemento.getAttribute("href");
        evento.preventDefault();
        if (pagina !== integrador.pagina) {
            console.log("Ver pagina: " + pagina);
            if (integrador.iframe === null)
                integrador.iframe = document.querySelector("#Contenidos>iframe");
            integrador.iframe.setAttribute("src", "./Recursos/" + pagina);
            if (integrador.seleccion !== null) integrador.seleccion.style.backgroundColor = "";
            elemento.style.backgroundColor = "RGBA(0,0,0,.8)";
            integrador.seleccion = elemento;
            integrador.pagina = pagina;
        }
    }
};
if (document.readyState !== 'loading') {
    integrador.iniciar();
} else {
    document.addEventListener('DOMContentLoaded', integrador.iniciar, false);
}