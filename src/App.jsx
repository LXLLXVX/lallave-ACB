import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Clubes from './pages/clubes/Clubes';
import Copa from './pages/copa/Copa';
import Legal from './pages/legal/legal';
import Privacy from './pages/privacy/Privacy';
import Cookies from './pages/cookies/Cookies';
import Terms from './pages/terms/Terms';
import './App.css'
import CrudTest from './components/crud-test/CrudTest'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/clubes" element={<Clubes/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/copa" element={<Copa/>} />
          <Route path='crud' element={<CrudTest></CrudTest>}/>
          <Route path='/legal' element={<Legal/>}/> 
          <Route path='/privacy' element={<Privacy/>}/>  
          <Route path='/cookies' element={<Cookies/>}/>
          <Route path='/terms' element={<Terms/>}/>
        </Routes>
    </Router>
  );
}

export default App;
