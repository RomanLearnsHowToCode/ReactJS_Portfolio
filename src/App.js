import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Navbar2 from "./components/navbar2";


function App() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Home/>
      <Work/>
    </div>
  );
}

export default App;