import React from "react";

const Todo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black flex items-center justify-center p-5">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            📝 My Todo App
          </h1>
          <p className="text-gray-300 mt-2">
            Stay organized. Stay productive.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl font-semibold transition">
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {/* Task 1 */}
          <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <p className="text-gray-800 font-medium">
                Learn React Hooks
              </p>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>

          {/* Task 2 */}
          <div className="flex items-center justify-between bg-green-100 rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked readOnly className="w-5 h-5" />
              <p className="text-gray-500 line-through font-medium">
                Build Todo UI
              </p>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>

          {/* Task 3 */}
          <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <p className="text-gray-800 font-medium">
                Connect Backend API
              </p>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-between text-gray-300 text-sm">
          <span>Total Tasks: 3</span>
          <span>Completed: 1</span>
        </div>
      </div>
    </div>
  );
};

export default Todo;