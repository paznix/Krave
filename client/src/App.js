//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

//Component
import Temp from "./Components/temp";
import DeliveryLayoutHOC from "./HOC/Delivery.hoc";

function App() {
  return (
    <>
      <HomeLayoutHOC path= "/" exact component={Temp} />
      <DeliveryLayoutHOC path="/delivery" exact component={Temp} />
    </>
  );
}

export default App;
