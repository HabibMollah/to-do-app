import { useRef, useState } from 'react';

function App() {
  interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  function toggleChecked(id: string, completed: boolean) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        return todo;
      })
    );
  }
  function deleteTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  console.log(todos);
  return (
    <div>
      <div className="text-center">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            inputRef.current &&
              setTodos([
                ...todos,
                {
                  id: crypto.randomUUID(),
                  title: inputRef.current.value,
                  completed: false,
                },
              ]);
            if (inputRef.current !== null) inputRef.current.value = '';
          }}
          className="m-4">
          <label
            htmlFor="todo-text"
            className="text-orange-500 font-bold text-3xl">
            New Item
          </label>
          <input
            ref={inputRef}
            type="text"
            id="todo-text"
            className="border focus:outline-none rounded-lg m-4 mx-auto w-[90vw] p-2 border-orange-400 block"
          />
          <button className="bg-orange-200 border border-orange-500 w-[90vw] text-orange-500 font-bold rounded-lg py-1">
            Add
          </button>
        </form>
      </div>
      <div className="m-8">
        <h2 className="text-orange-500 font-bold text-2xl mb-2">To-do list:</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label htmlFor="checkbox">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleChecked(todo.id, e.target.checked)}
                    id="checkbox"
                    className="m-2"
                  />
                  {todo.title}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-100 px-1 mx-1 rounded-lg border-red-500 border text-red-500 font-bold text-sm">
                    Delete
                  </button>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
