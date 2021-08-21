import React from "react";
// import Footer from "../../shared/components/Footer";
// import Navbar from "../../shared/components/Navigation/Navbar";
// import Banner from "../../shared/components/Banner";
// import HomeAbout from "../../properties/components/HomeAbout";
// import HomeRecent from "../../properties/components/HomeRecent";
// import HomeHow from "../../properties/components/HomeHow";
// import HomeTestimonials from "../../properties/components/HomeTestimonials";
// import HomePopularCities from "../../properties/components/HomePopularCities";
import Title from "../components/Title";
import OccupantColumns from "../components/OccupantColumn";

const MoveOutApp = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        {/* <Navbar />
        <Banner /> */}
        <div className="main-content">
          <div className="main-content-container">
            <Title title="Move-out List" />
            <OccupantColumns />
            {/* <HomeAbout />
            <HomeRecent />
            <HomeHow />
            <HomeTestimonials />
            <HomePopularCities /> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MoveOutApp;
