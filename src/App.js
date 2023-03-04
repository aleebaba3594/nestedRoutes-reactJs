import './App.css';
import { Route,Routes } from 'react-router-dom';
import Contact from './components/Contact';
import List from './components/List';
import Home from './components/Home';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';
import Students from './components/Students';
import Teachers from './components/Teachers';

function App() {
  return (
    <div>
      <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>

{/* nested rout starts here   */}
    <Route path='/list' element={<List/>}>
      {/* index attribute shows an alement by default  */}
      <Route index element={<Teachers/>}></Route> 
    <Route path='students' element={<Students/>}/>
    <Route path='teachers' element={<Teachers/>}/>
    </Route>
    {/* nested route ends here  */}
    <Route path='*' element={<ErrorPage/>}/>
 


   </Routes>
   </div>

  );
}

export default App;
