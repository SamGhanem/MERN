import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import DisplayOne from './components/displayone';
import Update from './components/update';
import CreateAuthors from './views/viewAuthorsForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/authors/create' element={<CreateAuthors/>}/>
            <Route path="/authors/:id" element={<DisplayOne/>}/>
            <Route path='/authors/update/:id'  element={<Update/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
