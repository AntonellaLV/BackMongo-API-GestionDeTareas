const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

// Actualizar una tarea
router.put('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
