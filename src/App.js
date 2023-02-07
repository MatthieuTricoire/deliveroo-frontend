import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Restaurant from "./components/Restaurant";

//? Images import
import logoDeliveroo from "./assets/img/logo-teal.svg";

function App() {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {!isLoaded ? (
        <p>Loading</p>
      ) : (
        <>
          <header className="header container row">
            <img className="header__logo" src={logoDeliveroo} alt="" />
          </header>
          <main className="main">
            <Restaurant data={data} orders={orders} setOrders={setOrders} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
