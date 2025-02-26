import './App.css';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const handleDownloadCV = () => {
  const pdfUrl = "/LukeJohnsonCV.pdf";

  window.open(pdfUrl, "_blank");

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "LukeJohnsonCV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-transparent text-gray-200 min-h-screen">
        <header className="absolute inset-x-0 top-0 z-50 bg-transparent shadow-none">
          <nav className="flex items-center justify-between p-6 lg:px-8">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-8 w-8" />
            </button>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-2xl font-semibold hover:text-indigo-400">Home</Link>
              <Link to="/projects" className="text-2xl font-semibold hover:text-indigo-400">Projects</Link>
              <Link to="/contact" className="text-2xl font-semibold hover:text-indigo-400">Contact</Link>
            </div>

            {/* Desktop Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="hidden lg:block text-2xl font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Download CV <span aria-hidden="true">→</span>
            </button>
          </nav>
        </header>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out" aria-hidden="true" />

          <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button className="text-gray-200 mb-6" onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-8 w-8" />
            </button>
            <nav className="flex flex-col gap-y-6">
              <Link to="/" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/projects" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link to="/contact" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              
              {/* Mobile Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="text-xl font-semibold text-indigo-400 hover:text-indigo-300 text-left"
              >
                Download CV <span aria-hidden="true">→</span>
              </button>
            </nav>
          </div>
        </Dialog>

        {/* Page Routes */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

