import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ProjectScreen from "./ui/views/ProjectScreen";
import EventsScreen from "./ui/views/EventsScreen";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventsScreen />} />
          <Route path="/project/:name" element={<ProjectScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
