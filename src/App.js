import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './views/Main';
import OneProduct from './views/OneProduct';

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/products/:id" element={<OneProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
