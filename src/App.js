import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/projects/Portfolio";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
    <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <Testimonials />
      <Contact /> 
      <ScrollUp />
      <Footer />
    </>
  );
};

export default App;
