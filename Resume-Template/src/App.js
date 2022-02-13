import logo from './logo.svg';
import Name from "./Components/name"
import About from "./Components/about"
import Education from "./Components/education"
import Experience from "./Components/experience"
import Contact from "./Components/contact"
import Skills from "./Components/skills"
import Image from "./Components/image"
import RowAndColumnSpacing from "./Components/grid"
import FixedContainer from "./Components/container"
import './Components/cv.css';



function App() {
  return (
    <div className="background">
    {/* <Name/>
    <About/>
    <Education/>
    <Experience/>
    <Image/>
    <Contact/>
    <Skills/> */}
    {/* <Name/>
    <RowAndColumnSpacing/> */}
    <FixedContainer  />
    </div>
  );
}

export default App;
