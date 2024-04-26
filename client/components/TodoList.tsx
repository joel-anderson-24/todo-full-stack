import { useQuery } from '@tanstack/react-query'
import * as api from '../apis/apiClient.ts'

export function TodoList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getAllTodos(),
  })

  if (isPending) {
    return <span>Just wait bruh...</span>
  }

  if (isError) {
    return <span>Something went wrong...soz. Error: {error.message}</span>
  }

  const todos = data

  return (
    <>
      {todos.map((todo) => {
        return (
          <p key={todo.id}>
            ID: {todo.id}
            <br></br>
            Task: {todo.task}
            <br></br>
            Priority: {todo.priority}
            <br></br>
            Completed? {todo.completed ? '👌' : '👎'}
          </p>
        )
      })}
    </>
  )
}
