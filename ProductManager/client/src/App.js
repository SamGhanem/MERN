import './App.css';
import DisplayOne from './components/displayone';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import Update from './components/update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/product/:id" element={<DisplayOne/>}/>
            <Route path='/product/update/:id'  element={<Update/>}/>
            
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
