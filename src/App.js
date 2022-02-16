import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <MainPage data={data} />
    </div>
  );
}

export default App;
