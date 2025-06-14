import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import HomePage from './pages/Home';
import Contactus from './pages/Contact';
import AboutUs from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contactus />} />
         <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;