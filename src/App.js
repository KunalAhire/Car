import './App.css';
import Home from './componants/Home';
import NavBar from './componants/NavBar';
import NewUser from './componants/NewUser';
import CarDetails from './componants/CarDetails';
import ServiceRecords from './componants/ServiceRecords';
import ServiceEntry from './componants/ServiceEntry';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from "./componants/Alert";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     < NavBar />
     <Alert />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newuser' element={<NewUser />} />
      <Route path='/cardetails' element={<CarDetails />} />
      <Route path='/service' element={<ServiceRecords />} />
      <Route path='/serviceentery' element={<ServiceEntry />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
