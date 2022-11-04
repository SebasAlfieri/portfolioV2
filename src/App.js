import './App.css';
import Header from './components/Header';
import Projects from "./components/Projects"
import Indicator from "./components/Indicator"
import TopIcon from './components/TopIcon';
import Contact from './components/Contact';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <TopIcon/>
      <Header/>
      <Indicator/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
