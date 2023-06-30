import "./styles.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";

export default function App() {
  const [data, setData] = useState([]);

  const globalState = { data, setData };
  
  const consultaAPI = async () => {
    const url = 'https://api.pexels.com/v1/curated?per_page=16'
    const resultado = await fetch(url ,{
      headers: {
        Authorization: "MleTdf1dCRRcv1svPUkijMu2Yq85RQNliztEyNJDvcbRzMoU3NvCVoyF"
      }
    }
      );
    const datos = await resultado.json()
    setData(datos.photos)
}  

useEffect(() => {
  consultaAPI();
},[] )



  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
