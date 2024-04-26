import { AddTodo } from './AddTodo.tsx'
import { TodoList } from './TodoList.tsx'
import { DeleteTodo } from './DeleteTodo.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>Todos</h1>
        <AddTodo />
        <DeleteTodo />
        <TodoList />
      </header>
      <section className="main"></section>
    </>
  )
}

export default App
