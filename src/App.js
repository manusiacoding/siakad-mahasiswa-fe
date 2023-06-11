import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./rootLayout.jsx";
import Home from "./views";
import Presensi from "./views/presensi";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<RootLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/presensi" element={<Presensi />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
