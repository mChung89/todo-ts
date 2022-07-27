import React, { useState } from 'react';
import InputField from './components/InputField'
import { Todo } from './model'
import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id: Date.now(), todo, isDone: false}])
    }
  }

  return (
    <div className="App">
      <span className='heading'>To-Do App</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <Todolist /> */}
      {todos.map(each => <li>{each.todo}</li>)}
    </div>
  );
}

export default App;
