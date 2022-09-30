import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import './css/App.css';
import Header from "./components/views/Header";
import Body from "./components/views/Body";
import { useState } from "react";

const Monitor = () => {
  const [panelName, setPanelName]: [string, any] = useState("engine");

  return (
    <div className="App">
      <Header panelSwitch={[panelName, setPanelName]} />
      <Body panelSwitch={[panelName, setPanelName]} />
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
