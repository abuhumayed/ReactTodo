import AddTodoForm from './components/AddTodoForm'
import TodoItem from './components/TodoItem'
import { dummyData } from './data/todos'

function App() {
  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Your Todo's</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm />
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
