# To-Do List App

Esta es una aplicación de lista de tareas (To-Do List) que permite a los usuarios agregar, visualizar y marcar tareas como completadas (boolean). 
La aplicación utiliza Node.js y Express para el backend, PostgreSQL como base de datos y Axios para las solicitudes HTTP.

## Tecnologías Usadas

- **Backend**: Node.js, Express
- **Base de Datos**: PostgreSQL
- **Frontend**: HTML, CSS, JQuery
- **Librerías**: Axios
- **Control de Versiones**: Git

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1. **Clona el repositorio en tu máquina local.**
2. **Instala las dependencias utilizando npm install.**
3. **Configura la BD (ve al siguiente punto).**

## Base de datos

1. Ejecuta el Script del archivo txt "BD" en la Shell de Psql (Debes tener instalado Postgres).
2. La Base de datos es llamada "todo-list", la cual será borrada en caso de existencia y creada junto a su tabla "tasks".
3. En el proyecto (archivo server.js) modificar parámetros de conexión a la BD según sea tú caso.
