import { registrarInfo, obtenerInfo, actualizarInfo, eliminarInfo } from "./promesas.js"

window.addEventListener("load", () => {
    document.getElementById("btnValidar").addEventListener("click", validar);
    // document.getElementById("btnContraste").addEventListener("click", contraste);
    document.getElementById("btnContraste").addEventListener("click", activateClass);
    document.getElementById("btnValidar").addEventListener("click", registrar);
    mostrar();
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    // document.getElementById("btnEliminar").addEventListener("click", eliminar);
})

const registrar = ()=> {
    let eRiotid = document.getElementById("riotid");
    let eTelefono = document.getElementById("telefono");
    let eInstagram = document.getElementById("instagram");
    let eRango = document.getElementById("rango");
    let eMensaje = document.getElementById("mensaje");

    let vRiotid = eRiotid.value;
    let vTelefono = eTelefono.value;
    let vInstagram = eInstagram.value;
    let vRango = eRango.value;
    let vMensaje = eMensaje.value;

    let objeto = {
        riotid: vRiotid,
        telefono: vTelefono,
        instagram: vInstagram,
        rango: vRango,
        mensaje: vMensaje
    }
    registrarInfo(objeto).then(()=>{
        alert("Información guardada exitosamente");
        limpiar_formulario();
        mostrar();
    }).catch((e)=>{
        console.log(e)
    })


}

const mostrar = () => {
    obtenerInfo().then((info)=> {
        let estructura = "";
        console.log(info);
        info.forEach((p)=>{
            estructura += "</tr>";
            estructura += "<td>"+p.riotid+"</td>"; 
            estructura += "<td>"+p.telefono+"</td>";
            estructura += "<td>"+p.instagram+"</td>";
            estructura += "<td>"+p.rango+"</td>";
            estructura += "<td>"+p.mensaje+"</td>";
            estructura += "<td><button type='button' id='UPD"+p.id+"'>Actualizar</button></td>";
            estructura += "<td><button type='button' id='DEL"+p.id+"'>Eliminar</button></td>";
            estructura += "</tr>";
        });
        document.getElementById("botabla").innerHTML = estructura;
        info.forEach((p)=> {
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener('click', ()=> {
                document.getElementById("UPDriotid").value = p.riotid;
                document.getElementById("UPDtelefono").value = p.telefono;
                document.getElementById("UPDinstagram").value = p.instagram;
                document.getElementById("UPDrango").value = p.rango;
                document.getElementById("UPDmensaje").value = p.mensaje;
                document.getElementById("btnActualizar").value = p.id;
                alert("Seleccionaste a:" + p.riotid)
            });
            // 1.- Recupero el botón eliminar de cada fila
            // 2.- Agrego un listener tipo click
            // 3.- Asigno el id del documento al botón eliminar del formulario
            let elementoEliminar = document.getElementById("DEL"+p.id);
            elementoEliminar.addEventListener('click', ()=> {
                document.getElementById("btnEliminar").value = p.id;
                document.getElementById("DELriotid").value = p.riotid;
                document.getElementById("DELtelefono").value = p.telefono;
                document.getElementById("DELinstagram").value = p.instagram;
                document.getElementById("DELrango").value = p.rango;
                document.getElementById("DELmensaje").value = p.mensaje;
                document.getElementById("btnEliminar").value = p.id;
                if (confirm("Vas a eliminar a:\n"+p.riotid)) {
                    eliminarInfo(p.id).then(()=>{
                        alert("Se eliminó con éxito");
                        mostrar();
                        limpiar_formulario();
                    });
                };
            });
        });
    }).catch((e)=>{
        console.log(e)
    })
}

const actualizar = () => {
    let eRiotid = document.getElementById("UPDriotid");
    let eTelefono = document.getElementById("UPDtelefono");
    let eInstagram = document.getElementById("UPDinstagram");
    let eRango = document.getElementById("UPDrango");
    let eMensaje = document.getElementById("UPDmensaje");

    let vRiotid = eRiotid.value;
    let vTelefono = eTelefono.value;
    let vInstagram = eInstagram.value;
    let vRango = eRango.value;
    let vMensaje = eMensaje.value;

    let objeto = {
        riotid:vRiotid,
        telefono:vTelefono,
        instagram:vInstagram,
        rango:vRango,
        mensaje:vMensaje
    }

    let id = document.getElementById("btnActualizar").value;
    actualizarInfo(objeto, id).then(()=> {
        alert("Se actualizó correctamente")
        mostrar();
        limpiar_formulario();
    }).catch((e)=>{
        console.log(e)
    });
}





const limpiar_formulario= () => {
    let eRiotid = document.getElementById("riotid");
    let eTelefono = document.getElementById("telefono");
    let eInstagram = document.getElementById("instagram");
    let eRango = document.getElementById("rango");
    let eMensaje = document.getElementById("mensaje");

    eRiotid.value = "";
    eTelefono.value = "";
    eInstagram.value = "";
    eRango.value = "";
    eMensaje.value = "";
}









function activateClass() {
    toggleClasses("cuerpo", "bodyColor");
    toggleClasses("mensaje", "textareaColor");
    toggleClasses("riotid", "inputColor");
    toggleClasses("telefono", "inputColor");
    toggleClasses("instagram", "inputColor");
    toggleClasses("rango", "colorRango");
    toggleClasses("btnValidar", "colorEnviar");
    toggleClasses("menuHorizontal", "colorMenu");
    toggleClasses("principal", "pPrincipal");
    toggleClasses("informacion", "pInformacion");
    toggleClasses("imagenes", "pImagenes");
    toggleClasses("video", "pVideo");
    toggleClasses("formulario", "pFormulario");
}

// function removeClasses (idElemento, claseElemento) {
//     element = document.getElementById(idElemento);
//     element.classList.add(claseElemento);
// }

// function addClasses(idElemento, claseElemento) {
//     element = document.getElementById(idElemento);
//     element.classlist.add(claseElemento);
// }


function toggleClasses (idElemento, claseElemento) {
    element = document.getElementById(idElemento);
    element.classList.toggle(claseElemento);
}
 

function validar(){
    validarVacio("riotid");
    validarCorreo("instagram");
    validarLongitud("telefono",12);
}
function validarVacio(idCampo){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento); //Imprime literalmente el elemento <input>
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor); //Imprime la variable valor que es lo que contiene el elemento en este caso <input>
    console.log(valor.length);
    let valorSinEspacios = valor.trim(); //Recupera el "valor" sin espacios al inicio ni al final
    console.log(valorSinEspacios.length); //Muestra el largo del "valor" sin espacios
    let eParrafoValor = document.getElementById("p"+idCampo); //Recuperamos los elementos "<p>" con su campo id, por ejemplo "pnombre"
    if(valorSinEspacios==""){ //Si la variable "valorSinEspacios" está vacía
        console.log("Esta vacio"); //imprime en consola que está vacía
        elemento.style.backgroundColor = "red"; //cambia el borde del elemento a rojo
        eParrafoValor.style.display = "block"; //cambia el display del elemento <p> a block (para que aparezca el mensaje)
    }else{ //Si "valorSinEspacios" tiene algo, entonces
        console.log("Tiene algo"); //imprime que tiene algo
        elemento.style.backgroundColor = "green"; // cambia el borde del elemento a verde
        eParrafoValor.style.display = "none";  // cambia el display a none (para que desaparezca el mensaje del elemento <p>)
    }
}

function validarLongitud(idCampo,max){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento); //Imprime literalmente el elemento <input>
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor); //Imprime el valor del elemento <input>
    console.log(valor.length); //Imprime el largo del valor del elemento <input>
    let valorSinEspacios = valor.trim(); //le quita los espacios al valor del elemento <input>
    console.log(valorSinEspacios.length); //imprime el nuevo valor sin espacios ni al principio ni al final
    let eParrafoValor = document.getElementById("p"+idCampo); //Recuperamos los elementos <p> cuyo id="" tenga "p" + el nombre del id
    if(valorSinEspacios.length==1 || valorSinEspacios.length==max){ //comparamos la longitud del valor del input y en caso de tener 0 o max (numero máximo asignado al atributo)
        console.log("Cumple"); //En caso de tener una longitud de valor entre 0 y max(en este caso 9) entonces imprimir que cumple.
        elemento.style.backgroundColor = "green"; //poner la etiqueta o elemento <input> en verde
        eParrafoValor.style.display = "none"; // y eliminar o desaparecer el mensaje de <p>
        
    }else{
        console.log("No cumple"); //Si no cumple la longitud entre 0 y max(en este caso 9) simplemente diremos que no cumple
        elemento.style.backgroundColor = "red"; //ponemos la etiqueta <input> de color rojo
        eParrafoValor.style.display = "block"; //y hacemos aparecer el mensaje de <p> marcando error.
    }
}
function validarCorreo(idCampo){
    let elemento = document.getElementById(idCampo);//Recupera el elemento
    console.log(elemento); //Imprime literalmente el elemento <input>
    let valor = elemento.value; //Recupera el valor del elemento si es un input
    console.log(valor); //Imprime el valor del elemento <input>
    console.log(valor.length); //Imprime el largo del valor del elemento <input>
    let valorSinEspacios = valor.trim(); //le quita los espacios al valor del elemento <input>
    console.log(valorSinEspacios.length); //imprime el nuevo valor sin espacios ni al principio ni al final
    let eParrafoValor = document.getElementById("p"+idCampo); //Recuperamos los elementos <p> cuyo id="" tenga "p" + el nombre del id
    if(valorSinEspacios.search("@")==-1){
        console.log("No Cumple");
        elemento.style.backgroundColor = "red";
        eParrafoValor.style.display = "block";
    }else{
        console.log("Cumple")
        elemento.style.backgroundColor = "green";
        eParrafoValor.style.display = "none"
    }
}
