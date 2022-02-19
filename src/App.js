import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Errorpage from './pages/Errorpage';
import Navbar from './pages/Navigationbar';
// import './index.css'
// import Navbar from './pages/Gation';

function App() {
  return (<>
      <Router>
        <Navbar/>
          <Routes>
            <Route path ='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='*' element={<Errorpage/>}/>
          </Routes>
      </Router>
      </>
  );
}

export default App;
