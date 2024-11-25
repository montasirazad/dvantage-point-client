import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AsOrganizationsGrow from "./Components/ArticleComponents/AsOrganizationsGrow";
import Ciso from "./Components/ArticleComponents/Ciso";
import ComposableBanking from "./Components/ArticleComponents/ComposableBanking";
import CorePrincipleForGmt from "./Components/ArticleComponents/CorePrincipleForGmt";
import HybridOperatingModel from "./Components/ArticleComponents/HybridOperatingModel";
import KeyAspectsOfInformation from "./Components/ArticleComponents/KeyAspectsOfInformation";
import LeveragingAdvancedAutomation from "./Components/ArticleComponents/LeveragingAdvancedAutomation";
import LeveragingBlockchain from "./Components/ArticleComponents/LeveragingBlockchain";
import NavigatingTheGotoMarket from "./Components/ArticleComponents/NavigatingTheGotoMarket";
import NextGenerationData from "./Components/ArticleComponents/NextGenerationData";
import OrchestratedItSystem from "./Components/ArticleComponents/OrchestratedItSystem";
import ServiceDeliveryMaturityModel from "./Components/ArticleComponents/ServiceDeliveryMaturityModel";
import ServiceResilience from "./Components/ArticleComponents/ServiceResilience";
import Home from "./Components/Home/Home";
import Asg from "./Components/LearnMore/Asg/Asg";
import AugmentedCapacityPlanning from "./Components/LearnMore/AugmentedCapacityPlanning/AugmentedCapacityPlanning";
import CloudEngineering from "./Components/LearnMore/CloudEngineering/CloudEngineering";
import Cscan from "./Components/LearnMore/Cscan/Cscan";
import Ds9s from "./Components/LearnMore/Ds9s/Ds9s";
import FsMon from "./Components/LearnMore/FsMon/FsMon";
import LearnMore from "./Components/LearnMore/LearnMore";
import Monitoring from "./Components/LearnMore/Monitoring/Monitoring";
import Omp from "./Components/LearnMore/Omp/Omp";
import Prx2 from "./Components/LearnMore/Prx2/Prx2";
import Sdas from "./Components/LearnMore/Sdas/Sdas";
import SterLn from "./Components/LearnMore/SterLn/SterLn";
import Xrobo from "./Components/LearnMore/Xrobo/Xrobo";
import SendEmail from "./Components/SendEmail/SendEmail";
import Header from "./Components/Shared/Header/Header";

function App() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(pathname);
  }, [pathname]);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn-more/:url" element={<LearnMore />} />
        <Route path="/learn-more/streln" element={<SterLn />} />
        <Route path="/learn-more/fsMon" element={<FsMon />} />
        <Route
          path="/learn-more/cloud-engineering"
          element={<CloudEngineering />}
        />
        <Route path="/learn-more/xRobo" element={<Xrobo />} />
        <Route path="/learn-more/cScan" element={<Cscan />} />
        <Route
          path="/learn-more/relationship-among-Ds-and-9s"
          element={<Ds9s />}
        />
        <Route
          path="/learn-more/augmented-capacity-planning-and-benchmarking"
          element={<AugmentedCapacityPlanning />}
        />
        <Route path="/learn-more/monitoring" element={<Monitoring />} />
        <Route path="/learn-more/PRx2" element={<Prx2 />} />
        <Route path="/learn-more/asg" element={<Asg />} />
        <Route path="/learn-more/sdas" element={<Sdas />} />
        <Route path="/learn-more/omp" element={<Omp />} />
        <Route
          path="/article/next-generation-data-centers"
          element={<NextGenerationData />}
        />
        <Route
          path="/article/core-principle-for-gmt"
          element={<CorePrincipleForGmt />}
        />
        <Route
          path="/article/service-resilience-posture"
          element={<ServiceResilience />}
        />
        <Route
          path="/article/navigating-the-go-to-market-strategy"
          element={<NavigatingTheGotoMarket />}
        />
        <Route
          path="/article/leveraging-advanced-automation-tools"
          element={<LeveragingAdvancedAutomation />}
        />
        <Route
          path="article/leveraging-blockchain-technology"
          element={<LeveragingBlockchain />}
        />
        <Route
          path="article/composable-banking"
          element={<ComposableBanking />}
        />
        <Route
          path="article/when-designing-an-orchestrated-it-system"
          element={<OrchestratedItSystem />}
        />
        <Route
          path="article/key-aspects-of-information-security"
          element={<KeyAspectsOfInformation />}
        />
        <Route
          path="article/as-organizations-grow"
          element={<AsOrganizationsGrow />}
        />
        <Route
          path="article/service-delivery-maturity-model"
          element={<ServiceDeliveryMaturityModel />}
        />
        <Route
          path="article/hybrid-operating-model"
          element={<HybridOperatingModel />}
        />
        <Route
          path="article/ciso"
          element={<Ciso />}
        />
        <Route path="/dvantage-point/send-email" element={<SendEmail />} />
      </Routes>
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;


// DVANTAGEPOINT LIMITED
// MD HAFIZULLAH
// Flat 6A, House 340, West Pirerbag
// Mirpur, Dhaka, 1216
// Bangladesh