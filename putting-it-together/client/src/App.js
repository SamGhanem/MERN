import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>
      <Person firstName={"Sam"} lastName={"Ghanem"} age={30} hair={"black"}/> 
      <Person firstName={"Ellie"} lastName={"Combs"} age={25} hair={"black"}/> 
      <Person firstName={"Fillmore"} lastName={"millard"} age={45} hair={"grey"}/> 
      </h1>
    
    </div>
  );
}

export default App;
