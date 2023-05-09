import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodo] = useState<string[]>([]);
  console.log(todos);

  return (
    <div>
      <div className="text-center">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            inputRef.current && setTodo([...todos, inputRef.current.value]);
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
              <li>
                <label htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" className="m-2" />
                  {todo}
                  <button className="bg-red-100 px-1 mx-1 rounded-lg border-red-500 border text-red-500 font-bold text-sm">
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
