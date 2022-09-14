import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Asg from './Components/LearnMore/Asg/Asg';
import AugmentedCapacityPlanning from './Components/LearnMore/AugmentedCapacityPlanning/AugmentedCapacityPlanning';
import CloudEngineering from './Components/LearnMore/CloudEngineering/CloudEngineering';
import Cscan from './Components/LearnMore/Cscan/Cscan';
import Ds9s from './Components/LearnMore/Ds9s/Ds9s';
import FsMon from './Components/LearnMore/FsMon/FsMon';
import LearnMore from './Components/LearnMore/LearnMore';
import Monitoring from './Components/LearnMore/Monitoring/Monitoring';
import Prx2 from './Components/LearnMore/Prx2/Prx2';
import SterLn from './Components/LearnMore/SterLn/SterLn';
import Xrobo from './Components/LearnMore/Xrobo/Xrobo';
import SendEmail from './Components/SendEmail/SendEmail';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/learn-more/:url' element={<LearnMore />} />
        <Route path='/learn-more/streln' element={<SterLn />} />
        <Route path='/learn-more/fsMon' element={<FsMon />} />
        <Route path='/learn-more/cloud-engineering' element={<CloudEngineering />} />
        <Route path='/learn-more/xRobo' element={<Xrobo />} />
        <Route path='/learn-more/cScan' element={<Cscan />} />
        <Route path='/learn-more/relationship-among-Ds-and-9s' element={<Ds9s />} />
        <Route path='/learn-more/augmented-capacity-planning-and-benchmarking' element={<AugmentedCapacityPlanning />} />
        <Route path='/learn-more/monitoring' element={<Monitoring />} />
        <Route path='/learn-more/PRx2' element={<Prx2 />} />
        <Route path='/learn-more/asg' element={<Asg />} />
        <Route path='/dvantage-point/send-email' element={<SendEmail />} />



      </Routes>
    </div>
  );
}

export default App;
