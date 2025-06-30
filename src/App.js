import { Route, Routes } from "react-router-dom";
import "./App.css";
import AISearchAndGenerativeEngineOptimization from "./Components/ArticleComponents/AISearchAndGenerativeEngineOptimization";
import AsOrganizationsGrow from "./Components/ArticleComponents/AsOrganizationsGrow";
import AutonomyOfTheEvolvingAI from "./Components/ArticleComponents/AutonomyOfTheEvolvingAI";
import BurpAI from "./Components/ArticleComponents/BurpAI";
import ChampionOfInnovation from "./Components/ArticleComponents/ChampionOfInnovation";
import Ciso from "./Components/ArticleComponents/Ciso";
import ComposableBanking from "./Components/ArticleComponents/ComposableBanking";
import CorePrincipleForGmt from "./Components/ArticleComponents/CorePrincipleForGmt";
import DeepContributionOfDsIn9s from "./Components/ArticleComponents/DeepContributionOfDsIn9s";
import FortifyingAI from "./Components/ArticleComponents/FortifyingAI";
import HarmonyOSNEXT from "./Components/ArticleComponents/HarmonyOSNEXT";
import HybridOperatingModel from "./Components/ArticleComponents/HybridOperatingModel";
import KeyAspectsOfInformation from "./Components/ArticleComponents/KeyAspectsOfInformation";
import LeveragingAdvancedAutomation from "./Components/ArticleComponents/LeveragingAdvancedAutomation";
import LeveragingBlockchain from "./Components/ArticleComponents/LeveragingBlockchain";
import LLMsAsOperatingSystems from "./Components/ArticleComponents/LLMsAsOperatingSystems";
import MarvelThatAugmentsHuman from "./Components/ArticleComponents/MarvelThatAugmentsHuman";
import NavigatingTheGotoMarket from "./Components/ArticleComponents/NavigatingTheGotoMarket";
import NextGenerationData from "./Components/ArticleComponents/NextGenerationData";
import OrchestratedItSystem from "./Components/ArticleComponents/OrchestratedItSystem";
import Quishing from "./Components/ArticleComponents/Quishing";
import RewireHybridWorkspace from "./Components/ArticleComponents/RewireHybridWorkspace";
import ServiceDeliveryMaturityModel from "./Components/ArticleComponents/ServiceDeliveryMaturityModel";
import ServiceResilience from "./Components/ArticleComponents/ServiceResilience";
import SIEM from "./Components/ArticleComponents/SIEM";
import Software3 from "./Components/ArticleComponents/Software3";
import TheAgriculturalRevolution from "./Components/ArticleComponents/TheAgriculturalRevolution";
import UnderstandingAIAgents from "./Components/ArticleComponents/UnderstandingAIAgents";
import UnifiedKnowledgeCenterSolution from "./Components/ArticleComponents/UnifiedKnowledgeCenterSolution";
import WINA from "./Components/ArticleComponents/WINA";
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
        <Route path="article/ciso" element={<Ciso />} />
        <Route
          path="article/unified-Knowledge-center-solution"
          element={<UnifiedKnowledgeCenterSolution />}
        />
        <Route
          path="article/Rewire-hybrid-workspace-with-Digital-Colleagues"
          element={<RewireHybridWorkspace />}
        />
        <Route
          path="article/Champion-of-innovation-and-the-guardian-of-the-Enterprise"
          element={<ChampionOfInnovation />}
        />
        <Route
          path="article/WINA-Making-LLMs-Smarter-Faster-and-Greener"
          element={<WINA />}
        />
        <Route path="article/SIEM-at-the-Helm" element={<SIEM />} />
        <Route
          path="article/Quishing-QR-version-of-phishing-attack-The-Sneaky-New-Kid-on-the-Block"
          element={<Quishing />}
        />
        <Route
          path="article/BurpAI-an-AI-Elevated-Penetration-Testing"
          element={<BurpAI />}
        />
        <Route
          path="article/Fortifying-AI-Doughnut-of-Defense-one-cannot-secure-what-remains-unseen"
          element={<FortifyingAI />}
        />
        <Route
          path="article/Understanding-AI-Agents-Architecting-the-Future-of-Autonomous-Systems"
          element={<UnderstandingAIAgents />}
        />

        <Route
          path="article/Autonomy-of-the-Evolving-AI-Agent-Ecosystem"
          element={<AutonomyOfTheEvolvingAI />}
        />
        <Route
          path="article/AI-Search-and-Generative-Engine-Optimization-(GEO)-A-Paradigm-Shift-in-Digital-Visibility"
          element={<AISearchAndGenerativeEngineOptimization />}
        />
        <Route
          path="article/LLMs-as-Operating-Systems-The-Intelligent-Future-is-Here"
          element={<LLMsAsOperatingSystems />}
        />
        <Route
          path="article/Software-English-is-the-new-programming-Language"
          element={<Software3 />}
        />
        <Route
          path="article/Deep-Contribution-of-Ds-in-9s-Uptime"
          element={<DeepContributionOfDsIn9s />}
        />
        <Route
          path="article/Marvel-that-augments-human-potentials-and-creates-new-opportunities"
          element={<MarvelThatAugmentsHuman />}
        />
        <Route
          path="article/HarmonyOS-NEXT-Built-for-Internet-of-Everything"
          element={<HarmonyOSNEXT />}
        />
        <Route
          path="article/The-Agricultural-Revolution-Integration-with-Technologies-and-A-Connected-Future"
          element={<TheAgriculturalRevolution />}
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
// Bangladesh
