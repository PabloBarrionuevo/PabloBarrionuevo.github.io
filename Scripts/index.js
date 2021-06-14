const integrador = {
    iframe: null,
    iniciar: function() {
        console.log("Iniciar trabajo integrador WEB 1");
        document.querySelectorAll("#Menu a").forEach(x => {
            x.addEventListener("click", function(e) { integrador.irA(e, x.getAttribute("href")); });
        });
        document.querySelectorAll("#Opciones a").forEach(x => {
            x.addEventListener("click", function(e) { integrador.irA(e, x.getAttribute("href")); });
        });
    },
    irA: function(evento, pagina) {
        evento.preventDefault();
        console.log("Ver pagina: " + pagina);
        if (integrador.iframe === null)
            integrador.iframe = document.querySelector("#Contenidos>iframe");
        integrador.iframe.setAttribute("src", "./Recursos/" + pagina)
    }
};
if (document.readyState !== 'loading') {
    integrador.iniciar();
} else {
    document.addEventListener('DOMContentLoaded', integrador.iniciar, false);
}