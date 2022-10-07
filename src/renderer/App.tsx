import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import "./css/App.css";
import Header from "./components/views/Header";
import Body from "./components/views/Body";
import { useState } from "react";

const Monitor = () => {
  const [panelName, setPanelName] = useState("engine");

  return (
    <div className="App">
      <Header panelName={panelName} setPanelName={setPanelName} />
      <Body panelName={panelName} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Monitor />} />
      </Routes>
    </Router>
  );
}
