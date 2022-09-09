const { Router } = require('express');
const router = Router();
const { getAlltask, createTask, getTask, updateTask, deleteTask } = require('../controllers/task.controller')
//
router.get('/task', getAlltask)
router.get('/task/:id', getTask)
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', updateTask)
//
module.exports = router;