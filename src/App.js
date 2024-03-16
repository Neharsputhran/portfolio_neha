import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Project from './component/project/Project';
function App() {
  return (
    <BrowserRouter>
         <NavBar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/project' element={<Project/>}/>
         </Routes>
    </BrowserRouter>
     
      
  );
}

export default App;
