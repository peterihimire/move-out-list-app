import "./App.css";
import Title from "./components/Title";
import OccupantColumns from "./components/OccupantColumn";
import OccupantList from "./components/OccupantList";
import Footer from "./components/Footer";

// // redux things
// import { createStore } from "redux";
// import { Provider } from "react-redux"; // react-redux - Provider - wraps app , connect - used in  components
// import reducer from "./reducer";

const App = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        {/* <Navbar />
        <Banner /> */}
        <div className="main-content">
          <div className="main-content-container">
            <Title title="Move-out List" />
            <OccupantColumns />
            <OccupantList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
