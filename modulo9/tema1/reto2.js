const express = require('express');
const cors = require('cors'); // Importar CORS
const app = express();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Endpoint POST para crear tareas
app.post('/task', (req, res, next) => {
// Uso de try catch
  try {
    const task = req.body;

    // Validación de la tarea
    if (!task.title || typeof task.title !== 'string' || task.title.trim() === '') {
      return res.status(400).send('El título de la tarea es obligatorio y no puede estar vacío');
    }

    // Simulación de almacenamiento en memoria
    const tasks = []; // Esto debería ser reemplazado por una base de datos
    tasks.push(task);

    // Respuesta exitosa
    res.status(201).send({ message: 'Tarea creada', task });
  } catch (error) {
    // Pasar el error al middleware de manejo de errores
    next(error);
  }
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en el servidor:', err.message);
  res.status(500).send('Ocurrió un error en el servidor');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

// Tambien se podria añadir:
//  Una base de datos
// Una autenticacion por token
// Una libreria de validaciones
// Una documentacion de la API
// Usar variables de entorno
// y un largo etc...