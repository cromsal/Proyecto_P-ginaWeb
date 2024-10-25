window.onload = inicializar;
        var comentarios, autor, comment, envio, contador;
        function inicializar(){
            comentarios = document.querySelector("#contenedorComentarios");
            autor = document.querySelector("input[name='usuario']");
            comment = document.querySelector("textarea");
            contador = document.querySelector("#contador");
            cargarComentarios();

            if (comentarios.childElementCount != 0){
                mostrarNumeroComentarios();
            }
        }

        function almacenar(){
            if (autor.value=='' || comment.value==''){
                alert("Los Campos Deben Ser Obligatorios")
            }
            else{
            var nuevoComentario=document.createElement("div");
            nuevoComentario.className="comentario";
            var fechaHora = new Date().toLocaleDateString('es-es', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
            nuevoComentario.innerHTML= fechaHora+"    <b> "+autor.value + "</b> - <i>" + comment.value+"</i>";
            comentarios.appendChild(nuevoComentario);
            mostrarNumeroComentarios();
            localStorage.setItem("comentario", comentarios.innerHTML);
            }
        }

        function cargarComentarios(){
            comentarios.innerHTML = localStorage.getItem("comentario");
        }

        function mostrarNumeroComentarios(){
            contador.innerHTML = "<font color=white> Número de comentarios: </font>" + "<font color=white>"+comentarios.childElementCount+"</font>" + "  <input type='button' value='Borrar' onclick='borrarComentarios()'>";
            document.getElementById('contador').style.marginLeft = '10px';

        }

        function borrarComentarios(){
            localStorage.clear();
            cargarComentarios();
            contador.innerHTML = "";
        }