import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
         <NavBar/>
         <Routes>
          {/* <Route path='/' element={<NavBar/>}/> */}
          {/* <Route path='/' element={<NavBar/>}/>
          <Route path='/' element={<NavBar/>}/> */}
         </Routes>
    </BrowserRouter>
     
      
  );
}

export default App;
