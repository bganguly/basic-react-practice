import { useState } from "react";

const TodoListUsingHooks = (props) => {
  return <ul>
    {props.items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
}

const TodoAppUsingHooks = () => {

  let [items, setItems] = useState([]);
  let [text, setText] = useState('');

  let handleChange = (e) => {
    setText( e.target.value );
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      "text": text,
      "id": Date.now()
    };
    setItems(items.concat(newItem))
    setText('')
  }

  return <div>
    <h3>TODO</h3>
    <TodoListUsingHooks items={items} />
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">
        What needs to be done?
      </label>
      <input
        id="new-todo"
        onChange={handleChange}
        value={text}
      />
      <button>
        Add #{items.length + 1}
      </button>
    </form>
  </div>
}

export default TodoAppUsingHooks;