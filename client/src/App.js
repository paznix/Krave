//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

//Component
import Temp from "./Components/temp";
import DiningLayoutHOC from "./HOC/Dining.hoc";
import TakeawayLayoutHOC from "./HOC/Takeaway.hoc";
import Login from "./Login/Login";
import { About } from "./Components/About";
import Register from "./Register/Register";
import { Routes } from "react-router-dom";

import { Route , BrowserRouter } from "react-router-dom";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <>
      <HomeLayoutHOC path= "/" exact component={Temp} />
      <TakeawayLayoutHOC path="/takeaway" exact component={Temp} />
      <DiningLayoutHOC path="/dining" exact component={Temp} />
  
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
