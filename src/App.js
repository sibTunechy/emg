import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
