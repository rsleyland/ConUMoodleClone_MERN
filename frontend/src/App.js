import './App.css';
import Home from './moodle/Home';
import Login from './moodle/Login';
import Course from './moodle/Course';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/course/:cid' element={<Course/>} />
      </Routes>
    </Router>
  )
}

export default App;
