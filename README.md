# BackMongo-API-GestionDeTareas

# API de Gestión de Tareas

Esta es una API sencilla para gestionar tareas, construida con Node.js, Express y MongoDB. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de tareas.

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

## Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   
**Instalar Dependencias:**

npm install

**Configurar Variables de Entorno:**

**Crea un archivo .env con la URI de MongoDB:**

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0-back.blckp.mongodb.net/mydatabase

**Iniciar el Servidor:**

node app.js

**Endpoints:**

GET /api/tasks: Obtener todas las tareas.

POST /api/tasks: Crear una nueva tarea.

PUT /api/tasks/:id: Actualizar una tarea por su ID.

DELETE /api/tasks/:id: Eliminar una tarea por su ID.
