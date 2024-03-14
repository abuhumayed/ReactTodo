import { Key } from 'lucide-react'
import AddTodoForm from './components/AddTodoForm'
import TodoItem from './components/TodoItem'
import { dummyData } from './data/todos'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    )
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todo's</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setToDoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
