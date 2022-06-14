import './styles/global.css';
// import './App.css'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experiences from './components/Work/Experiences';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">      
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experiences />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
