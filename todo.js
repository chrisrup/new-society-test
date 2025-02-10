function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');
  const [url, setUrl] = React.useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const link = url.trim() ? url : null;
      setTodos([...todos, { id: Date.now(), text, link }]);
      setText('');
      setUrl('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Todo List</h1>
      
      <form onSubmit={addTodo} className="mb-6 space-y-4">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter todo text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Add optional link (https://...)"
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="space-y-3">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <span>{todo.text}</span>
              {todo.link && (
                <a
                  href={todo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  🔗
                </a>
              )}
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 px-2"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}