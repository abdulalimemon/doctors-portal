import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      {/* <Route path='/' element={}></Route> */}
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
     </Routes>
    </div>
  );
}

export default App;
