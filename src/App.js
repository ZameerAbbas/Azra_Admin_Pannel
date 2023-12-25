import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashbord/Dashbord";
import Empty from "./Newfolder/src/Components/EmptyState/Empty"

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Empty" element={<Empty />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
