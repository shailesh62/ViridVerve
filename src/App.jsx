import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Blog from './components/BlogComponents/Blog';
import BlogDetail from './components/BlogComponents/BlogDetail';
import HomePage from './components/HomePageComponents/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default App;
