import "./App.css";
// import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Title from "./components/Title";
import OccupantColumns from "./components/OccupantColumn";
import OccupantList from "./components/OccupantList";
import Footer from "./components/Footer";
import occupantItems from "./occupant-item";
// redux things
import { createStore } from "redux";
// react-redux - Provider - wraps app , connect - used in  components
import { Provider } from "react-redux";
import reducer from "./store/reducer/reducer";

// intial store which is the state
const initialStore = {
  occupants: occupantItems,
};

// store
const store = createStore(reducer, initialStore);

const App = () => {
  return (
    <Provider store={store}>
      <div id="page-container" className="App">
        <div id="content-wrapper">
          {/* <Navbar /> */}
          <Banner />
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
    </Provider>
  );
};

export default App;
