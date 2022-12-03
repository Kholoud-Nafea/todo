const express = require('express')
const { updateTodo, createTodo, deleteTodo, getTodo, getAllTodo } = require('../controller/todo')

const router = express.Router()

// router.post('/:userId/todo', createTodo)
router.post('/todo', createTodo)

// router.put('/:userId/:todoId', updateTodo)
router.put('/todo/:todoId', updateTodo)

// router.delete('/:userId/:todoId', deleteTodo)
router.delete('/todo/:todoId', deleteTodo)

// router.get('/:userId/:todoId', getTodo)
router.get('/:todoId', getTodo)

// router.get('/:userId/todo/getAll', getAllTodo)
// router.get('/todo/getAll', getAllTodo)

module.exports = router