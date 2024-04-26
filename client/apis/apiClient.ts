import request from 'superagent'
import { Todos, TodoData } from '../../models/todos.ts'

const root = '/api/v1/todos'

export async function getAllTodos(): Promise<Todos[]> {
  const res = await request.get(root)
  return res.body
}

export async function addNewTodo(newTodo: TodoData): Promise<void> {
  await request.post(root).send(newTodo)
}

export async function deleteTodo(id: string) {
  console.log(id)
  await request.delete(`${root}/${id}`)
}
