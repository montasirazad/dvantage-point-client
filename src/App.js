import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}



      </Routes>
    </div>
  );
}

export default App;
