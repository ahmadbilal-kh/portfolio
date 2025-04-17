import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
