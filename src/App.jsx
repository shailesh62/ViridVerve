import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Blog from "./components/BlogComponents/Blog";
import BlogDetail from "./components/BlogComponents/BlogDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
    // <>
    // <Blog />
    // </>
    
    
  );
};

export default App;
