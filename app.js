// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const lista_amigos = []; //Array para almacenar los amigos ingresados


function agregarAmigo(){ //Funcion para agregar un amigo a la lista

    //Se usa trim para eliminar vacios
    let nombre_ingresado = document.getElementById('amigo').value.trim(); //Se obtiene el valor ingresado en la caja de texto
    
    if(nombre_ingresado === ''){ //Se valida que el campo no este vacio
        alert('Ingrese un nombre valido'); //Si el campo esta vacio se muestra un mensaje de alerta
        return; //Se retorna para no seguir con la ejecucion del codigo
    }
    
    lista_amigos.push(nombre_ingresado);//Devolvemos el elemento para no generar un vacion en el array
    limpiarCaja(); //Al ingresar exitosamente un elemento se limpia la caja de texto
    console.log(lista_amigos); //Se imprime en consola el array con los elementos ingresados
    
    let listaHTML = ''; //Variable para almacenar el HTML de la lista de amigos

    for(let i = 0; i < lista_amigos.length; i++){ //Se recorre el array de amigos
        listaHTML += `<li>${lista_amigos[i]}</li>`; //Se agrega un elemento a la lista de amigos
    }
    
    document.getElementById('listaAmigos').innerHTML = listaHTML; //Se muestra la lista de amigos en el HTML

}


let limpiarCaja = () => document.getElementById('amigo').value = ''; //Funcion para limpiar la caja de texto   


function sortearAmigo(){ //Funcion para sortear un amigo

    if(lista_amigos.length === 0){ //Se valida que la lista de amigos no este vacia
        alert('No hay amigos para sortear'); //Si la lista esta vacia se muestra un mensaje de alerta
        return; //Se retorna para no seguir con la ejecucion del codigo
    }

    let amigo_secreto = lista_amigos[Math.floor(Math.random() * lista_amigos.length)]; //Se obtiene un amigo secreto aleatorio
    document.getElementById('resultado').innerHTML = amigo_secreto; //Se muestra el amigo sorteado en el HTML

}


