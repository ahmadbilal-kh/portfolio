import './App.css';
import About from './components/About';
import Education from './components/Education';
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
    </>
  );
}

export default App;
