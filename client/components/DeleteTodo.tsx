import { ChangeEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient.ts'

export function DeleteTodo() {
  const [deleteTodo, setDeleteTodo] = useState('')
  const [deletedTodo, setDeletedTodo] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (deleteTodo: string) => api.deleteTodo(deleteTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeleteTodo(e.target.value)
  }

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(deleteTodo)
    setDeletedTodo(deleteTodo)
    setDeleteTodo('')
  }

  return (
    <>
      <p>Deleted Todo: {deletedTodo}</p>
      <form onSubmit={handleDelete}>
        <label htmlFor="delete">Task to delete</label>
        <input
          className="new-todo"
          placeholder="Type a task ID to delete"
          autoFocus={true}
          onChange={handleChange}
          value={deleteTodo}
          id="delete"
        ></input>
        <button>Delete todo</button>
      </form>
    </>
  )
}
