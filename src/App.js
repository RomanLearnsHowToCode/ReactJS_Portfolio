import Navbar from "./components/navbar";
import Home from "./components/home";
import Work from "./components/work";

function App() {
  return (
    <div className="no-scrollbar overflow-y-auto">
      <Navbar/>
      <Home />
      <Work />
      <Home />
    </div>
  );
}

export default App;