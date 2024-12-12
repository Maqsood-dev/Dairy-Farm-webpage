import "./App.css";
import NavBar from "./navbar";
import Home from "./home";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
