import { Routes, Route } from 'react-router-dom'
import Blog from './components/BlogComponents/Blog';
import BlogDetail from './components/BlogComponents/BlogDetail';
import HomePage from './components/HomePageComponents/HomePage';
import Layout from './components/Layout';
import Shop from './components/shop/SustainableClothing';
import ProductDetail from './components/shop/ProductDetail';
import About from './components/Home/About';
import Contact from './components/Home/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' index element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

    </Routes>
  );
};

export default App;
