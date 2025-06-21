import React from "react";
import AboutVideo from "../AboutVideo/AboutVideo";
import AllArticles from "../AllArticles/AllArticles";
import AllServices from "../AllServices/AllServices";
import BgVideo from "../BgVideo/BgVideo";
import Footer from "../Shared/Footer/Footer";
import UpdatedServices from "../updatedService/UpdatedServices";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <BgVideo />
      <UpdatedServices />
      <AboutVideo />
      {/* <OurClient /> */}
      <AllServices />
      <AllArticles />
      <Footer />
    </div>
  );
};

export default Home;
