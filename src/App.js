import './App.css';
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Courses from './routes/Courses'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/courses" element = {<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
