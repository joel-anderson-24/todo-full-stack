// eslint-disable-next-line no-unused-vars
import { ChangeEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient.ts'
import { TodoData } from '../../models/todos.ts'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const [submittedTodo, setSubmittedTodo] = useState('')
  const [priority, setPriority] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTodo: TodoData) => api.addNewTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    setSubmittedTodo(newTodo)
    mutation.mutate({ task: newTodo, priority: priority, completed: false })
    e.preventDefault()
    setNewTodo('')
  }

  return (
    <>
      <p>New Todo: {newTodo}</p>
      <p>Submitted Todo: {submittedTodo}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={newTodo}
          id="name"
        ></input>
        <label htmlFor="priority">Priority</label>
        <select id="priority" onChange={handlePriorityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn">Submit todo</button>
      </form>
    </>
  )
}
