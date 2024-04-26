import connection from './connection'
import { Todos } from '../../models/todos.ts'

const db = connection

export async function getTodos(): Promise<Todos[]> {
  return db('todos').select()
}

export async function getTodosById(id: number): Promise<Todos> {
  return db('todos').where({ id }).select().first()
}

export async function updateTodo(
  id: number,
  newTodo: {
    task: string
    priority: number
    completed: boolean
  },
) {
  return db('todos').where({ id }).select().update(newTodo)
}

export async function addTodo(
  task: string,
  priority: number,
  completed: boolean,
) {
  return db('todos').select().insert({ task, priority })
}

export async function deleteTodo(id: number) {
  return db('todos').select().where({ id }).delete()
}
