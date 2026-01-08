import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/MOONPHOTOGRAPHY">
      <div className="font-poppins bg-gradient-moon min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;