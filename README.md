# Proyecto: Amigo Secreto

Este es un proyecto simple de "Amigo Secreto" donde los usuarios pueden ingresar los nombres de sus amigos, visualizarlos en una lista y luego realizar un sorteo para elegir un amigo secreto de manera aleatoria.

## Funcionalidades

### 1. **Agregar amigos**
- Los usuarios pueden ingresar nombres de amigos en un campo de texto.
- Al hacer clic en el botón **"Añadir"**, el nombre ingresado se agrega a una lista que se muestra en la página.
- Si el campo está vacío o solo contiene espacios en blanco, se muestra una alerta para que el usuario ingrese un nombre válido.

### 2. **Visualización de la lista de amigos**
- Todos los amigos ingresados se muestran en una lista desordenada (`<ul>`).
- Cada amigo agregado se agrega como un `<li>` dentro del `ul` con el id `listaAmigos`.

### 3. **Sortear amigo secreto**
- Al hacer clic en el botón **"Sortear amigo"**, se selecciona un amigo de la lista de manera aleatoria.
- El nombre del amigo seleccionado se muestra debajo del botón, en la sección de resultados (`<ul>` con el id `resultado`).

## Estructura de Archivos

- **index.html**: Contiene el HTML del proyecto, que incluye la estructura de la interfaz de usuario y los elementos interactivos.
- **style.css**: Contiene los estilos de la página, incluyendo la disposición, los colores y el diseño de los botones y las listas.
- **app.js**: Contiene la lógica de programación para agregar amigos, limpiar el campo de texto y realizar el sorteo de amigo secreto.

## Instrucciones de uso

1. Clona o descarga el repositorio en tu computadora.
2. Abre el archivo `index.html` en tu navegador para ver la interfaz de usuario.
3. Ingresa los nombres de tus amigos en el campo de texto y haz clic en **"Añadir"** para agregarlos a la lista.
4. Haz clic en **"Sortear amigo"** para que se elija un amigo secreto aleatoriamente y se muestre en la sección de resultados.

## Requisitos

- Un navegador web moderno (Chrome, Firefox, etc.) para visualizar el proyecto.


