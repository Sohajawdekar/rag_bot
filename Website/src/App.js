import "./App.css";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonials";
import Work from "./Components/Work";
import Home from "./Components/home";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
