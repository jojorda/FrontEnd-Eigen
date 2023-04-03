import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.tsx';
import Detail from './components/Navbar.tsx';

function App() {
  return (
    <>
      <Router>
        <Detail />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

