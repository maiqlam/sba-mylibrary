import React from "react";
import Main from "./pages/Main";
import MyBookshelf from "./pages/MyBookshelf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookshelf" element={<MyBookshelf />} />
      </Routes>
    </Router>
    
  );
}

export default App;
