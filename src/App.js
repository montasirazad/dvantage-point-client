import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import FsMon from './Components/LearnMore/FsMon/FsMon';
import LearnMore from './Components/LearnMore/LearnMore';
import SterLn from './Components/LearnMore/SterLn/SterLn';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/learn-more/:name' element={<LearnMore />} />
        <Route path='/learn-more/streIn' element={<SterLn />} />
        <Route path='/learn-more/fsMon' element={<FsMon />} />



      </Routes>
    </div>
  );
}

export default App;
