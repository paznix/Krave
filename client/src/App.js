//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

//Component
import Temp from "./Components/temp";
import DiningLayoutHOC from "./HOC/Dining.hoc";
import TakeawayLayoutHOC from "./HOC/Takeaway.hoc";

function App() {
  return (
    <>
      <HomeLayoutHOC path= "/" exact component={Temp} />
      <TakeawayLayoutHOC path="/takeaway" exact component={Temp} />
      <DiningLayoutHOC path="/dining" exact component={Temp} />
    </>
  );
}

export default App;
