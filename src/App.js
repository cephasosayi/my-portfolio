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
import BackToTop from "react-back-to-top-button";
import Up from '@iconscout/react-unicons/icons/uil-arrow-circle-up'


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

      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span ><Up color='white' className='icon' /></span>
      </BackToTop>
    </div>
  );
}

export default App;
