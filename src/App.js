import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Animation1 from "./components/animation1";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills />
      <Work />
    </div>
  );
}

export default App;