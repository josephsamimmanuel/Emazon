import './App.css';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Home/>} ></Route>
      <Route path='/checkout' element={<Checkout/>} ></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
