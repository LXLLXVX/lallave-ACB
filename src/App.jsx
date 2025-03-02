import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Clubes from './pages/clubes/Clubes';
import Copa from './pages/copa/Copa';
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/clubes" element={<Clubes/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/copa" element={<Copa/>} />
        </Routes>
    </Router>
  );
}

export default App;
