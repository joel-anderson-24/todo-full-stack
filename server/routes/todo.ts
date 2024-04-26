import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.json(todos)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos = await db.getTodosById(id)
    res.json(todos)
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { task, priority, completed } = req.body
    await db.addTodo(task, priority, completed)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})
// /api/v1/todos/:id
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  console.log('i got hit', id)
  try {
    await db.deleteTodo(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

// fixed
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const newTodo = req.body
    await db.updateTodo(id, newTodo)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

export default router
