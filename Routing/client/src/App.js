import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
    //to be exported and imported to the App component.
    //We've combined them here to simplify our example.
const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}
    
const Hello = (props) => {
  return (
    <h1 style={{color: "blue"}}>The word is : Hello </h1>
  );
}
const Number = (props) => {
  return (
    <h1 style={{color: "blue"}}>The number is : 4 </h1>
  );
}
const Color = (props) => {
  return (
    <h1 style={{color: "blue", backgroundColor: "red"}}>The word is : Hello </h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/number" element={<Number />} />
        <Route path="/hello/red/blue" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App

