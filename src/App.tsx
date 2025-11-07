// Main App component with routing configuration
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Videos from './pages/Videos';
import OfficialLinks from './pages/OfficialLinks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      {/* Main layout with flex column to push footer to bottom */}
      <div className="min-h-screen flex flex-col">
        {/* Navigation bar */}
        <Navbar />

        {/* Main content area - grows to fill available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/links" element={<OfficialLinks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
