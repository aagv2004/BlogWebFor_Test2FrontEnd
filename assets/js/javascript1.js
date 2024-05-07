function clickeame(){
    let body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        body.style.color = "black"
    } else {
        body.style.backgroundColor = "black"
        body.style.color = "white"
    }
    }

function validar(){
    validarVacio("riotid");
    validarCorreo("instagram");
    validarLongitud("telefono",9);
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
        elemento.style.borderColor = "red"; //cambia el borde del elemento a rojo
        eParrafoValor.style.display = "block"; //cambia el display del elemento <p> a block (para que aparezca el mensaje)
    }else{ //Si "valorSinEspacios" tiene algo, entonces
        console.log("Tiene algo"); //imprime que tiene algo
        elemento.style.borderColor = "green"; // cambia el borde del elemento a verde
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
        elemento.style.borderColor = "green"; //poner la etiqueta o elemento <input> en verde
        eParrafoValor.style.display = "none"; // y eliminar o desaparecer el mensaje de <p>
        
    }else{
        console.log("No cumple"); //Si no cumple la longitud entre 0 y max(en este caso 9) simplemente diremos que no cumple
        elemento.style.borderColor = "red"; //ponemos la etiqueta <input> de color rojo
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
        elemento.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }else{
        console.log("Cumple")
        elemento.style.borderColor = "green";
        eParrafoValor.style.display = "none"
    }
}
