import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AugmentedCapacityPlanning from './Components/LearnMore/AugmentedCapacityPlanning/AugmentedCapacityPlanning';
import CloudEngineering from './Components/LearnMore/CloudEngineering/CloudEngineering';
import Dfitness from './Components/LearnMore/Dfitness/Dfitness';
import Ds9s from './Components/LearnMore/Ds9s/Ds9s';
import FsMon from './Components/LearnMore/FsMon/FsMon';
import LearnMore from './Components/LearnMore/LearnMore';
import Monitoring from './Components/LearnMore/Monitoring/Monitoring';
import SterLn from './Components/LearnMore/SterLn/SterLn';
import Vscan from './Components/LearnMore/Vscan/Vscan';
import Xrobo from './Components/LearnMore/Xrobo/Xrobo';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/learn-more/:url' element={<LearnMore />} />
        <Route path='/learn-more/streIn' element={<SterLn />} />
        <Route path='/learn-more/fsMon' element={<FsMon />} />
        <Route path='/learn-more/cloud-engineering' element={<CloudEngineering />} />
        <Route path='/learn-more/xRobo' element={<Xrobo />} />
        <Route path='/learn-more/vScan' element={<Vscan />} />
        <Route path='/learn-more/relationship-among-Ds-and-9s' element={<Ds9s />} />
        <Route path='/learn-more/augmented-capacity-planning-and-benchmarking' element={<AugmentedCapacityPlanning />} />
        <Route path='/learn-more/dFitness' element={<Dfitness />} />
        <Route path='/learn-more/monitoring' element={<Monitoring />} />



      </Routes>
    </div>
  );
}

export default App;
