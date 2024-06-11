
import './App.css';
import Navbar from './components/Navbar';
import AddEmp from './components/AddEmp';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './components/Home';
import EditEmp from './components/EditEmp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      Employee Management React Full Stack Project.
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/addEmp' element={<AddEmp/>} ></Route>
      <Route path='/editEmp/:id' element={<EditEmp/>} ></Route>
    
    </Routes>
    </div>



    </BrowserRouter>
  );
}

export default App;
