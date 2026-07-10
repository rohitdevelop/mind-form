 import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    const text = input.trim()
    if (text === '') return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const remaining = todos.filter(t => !t.done).length

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center pt-16 px-4">
      <div className="w-full max-w-md bg-white rounded-lg border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Todo List
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:border-slate-500"
          />
          <button
            onClick={addTodo}
            className="bg-slate-700 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-800"
          >
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="text-slate-400 text-center py-6">No tasks yet</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center justify-between border border-slate-200 rounded-md px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4 accent-slate-700"
                  />
                  <span
                    className={
                      todo.done
                        ? 'text-slate-400 line-through'
                        : 'text-slate-800'
                    }
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-slate-400 hover:text-red-500 font-medium px-2"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {todos.length > 0 && (
          <p className="text-sm text-slate-500 text-center mt-5">
            {remaining} task{remaining !== 1 ? 's' : ''} remaining
          </p>
        )}
      </div>
    </div>
  )
}

export default App