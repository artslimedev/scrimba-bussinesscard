import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <Info />
        </div>
        <div className="container">
          <About />
          <Interests />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
