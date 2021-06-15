const prueba = {
    comentarios: 0,
    iniciar: function() {
        document.querySelector("form").addEventListener("submit", prueba.enviar, false);
    },
    enviar: function(evento) {
        evento.preventDefault();
        console.log("Enviar comentario?")
        const
            comentador = document.querySelector("form>p>input#comentador"),
            email = document.querySelector("form>p>input#email"),
            comentario = document.querySelector("form>p>input#comentario"),
            mensaje = document.querySelector("div#mensaje");
        let
            nuevo = "<p>Nuevo Comentario:</p>",
            ok = true;
        //validar
        if (comentador.value === "") {
            comentador.classList.add("error");
            ok = false;
        }
        if (comentario.value === "") {
            comentario.classList.add("error");
            ok = false;
        }
        //ok
        if (ok) {
            //enviar
            nuevo += "<p>Comentador: " + comentador.value + "</p>" +
                (email.value !== "" ? "<p>E-Mail: " + email.value + "</p>" : "") +
                "<p>Comentario: " + comentario.value + "</p>";
            if (prueba.comentarios < 10) {
                mensaje.innerHTML = mensaje.innerHTML + "<div class='mensaje'>" + nuevo + "</div>";
                prueba.comentarios++;
            } else {
                mensaje.innerHTML = "..." + "<div class='mensaje'>" + nuevo + "</div>";
                prueba.comentarios = 1;
            }
            alert("Gracias por comentar.");
        } else
            alert("Algo no va bien, revisa los campos necesarios para enviar el comentario...");
    }
};
document.addEventListener("DOMContentLoaded", prueba.iniciar, false)