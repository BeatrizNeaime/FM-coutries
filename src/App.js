import 'antd/dist/reset.css';

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Context from '../src/contexts/Context'
import Detail from './pages/Detail'
import Gallery from './pages/Gallery';
import Navbar from "./components/Navbar";

function App() {
  const [tema, setTema] = useState({ isDark: false, classe: '' });

  return (
    <Context.Provider value={{ tema, setTema }}>
      <div className={`${tema.classe}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Gallery />} />
            <Route path='/detail/:cod' element={<Detail />} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
