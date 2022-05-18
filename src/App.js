import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/products/:id" element={<OneProduct/>}/>
        <Route path="/products/:id/edit" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
