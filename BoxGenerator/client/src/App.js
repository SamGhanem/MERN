import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';


function App() {
  const [boxArray, setBoxArray] = useState([]);
  return (
    <div className="App">
      <Form boxArray={boxArray} setBoxArray={setBoxArray} />
      <List boxArray={boxArray} />
    </div>
  );
}

export default App;
