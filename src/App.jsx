import Sidebar from "./component/sidebar";
import Home from "./component/home";
import TechStack from "./component/techstack";
import About from "./component/about";
import Project from "./component/project";
import "./index.css";
function App() {
  return (
    <div>
      <Sidebar />
      <div id="">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="techstack">
        <TechStack/>
      </div>
      <div id="project">
        <Project/>
      </div>
    </div>
  )
}

export default App
