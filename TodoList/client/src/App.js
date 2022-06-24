import './App.css';
import {useState} from "react";
import Form from "./components/Form";
import List from './components/List';

function App() {
  const [addTodo, setAddTodo] = useState([]);
  return (
    <div className="App">
      <Form addTodo={addTodo} setAddTodo={setAddTodo} />
      <List todo={addTodo} setTodo={setAddTodo} />
    </div>
  );
}

export default App;
