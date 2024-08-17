import Naveg from './components/Naveg';
import { Routes,Route,Navigate,BrowserRouter } from 'react-router-dom';
import Pagina from './pages/Pagina.js';
import Home from './pages/Home.js';
import Error from './pages/Error.js';
import './App.css';



function App() {
  return (
    <>
      
      <BrowserRouter>
        <Naveg></Naveg>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/:nombre' element={<Pagina/>}></Route>
          <Route path='/home' element={<Navigate to='/'/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
          
        </Routes>
      </BrowserRouter>
    
      
    </>
  );
}

export default App;
