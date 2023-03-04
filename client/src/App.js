import './App.css';
import Auth from './routes/Auth';
import Pages from './routes/Pages';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Ngo from './pages/Ngo';
import { Routes, Route } from 'react-router-dom';

function App() {

  const loginStatus = useSelector(state => state.isLoggedIn);
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/ngo" element={<Ngo />} /> */}
          {/* <Route path="/ngo/:id" element={<Ngo />} /> */}
        </Routes>
        {loginStatus ? <Pages /> : <Auth />}
      </Router>
    </>
  );
}

export default App;
