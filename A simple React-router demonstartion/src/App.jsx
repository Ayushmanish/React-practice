import { Routes,Route,Link } from "react-router-dom";
import AboutLittleLemon from "./AboutLittleLemon";
import Homepage from "./Homepage";
import Contact from "./Contact";
function App(){
  return(
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">AboutLittleLemon</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<AboutLittleLemon/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}
export default App;
