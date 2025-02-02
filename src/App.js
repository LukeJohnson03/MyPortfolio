import './App.css';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-transparent text-gray-200 min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50 bg-transparent shadow-none">
          <nav className="flex items-center justify-between p-6 lg:px-8">
            <button
              className="lg:hidden text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-8 w-8" />
            </button>

            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-2xl font-semibold hover:text-indigo-400">Home</Link>
              <Link to="/projects" className="text-2xl font-semibold hover:text-indigo-400">Projects</Link>
              <a href="#skills" className="text-2xl font-semibold hover:text-indigo-400">Skills</a>
              <Link to="/contact" className="text-2xl font-semibold hover:text-indigo-400">Contact</Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/lukeJohnsonCV.pdf" download= "LukeJohnsonCV.pdf" className="text-2xl font-semibold text-indigo-400 hover:text-indigo-300">
                Download CV <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </header>

        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40" aria-hidden="true" />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 p-6 shadow-lg">
            <button className="text-gray-200 mb-6" onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-8 w-8" />
            </button>
            <nav className="flex flex-col gap-y-6">
              <Link to="/" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/projects" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <a href="#skills" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <Link to="/contact" className="text-xl text-gray-200 font-semibold hover:text-indigo-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <a href="/lukeJohnsonCV.pdf" download= "LukeJohnsonCV.pdf" className="text-xl font-semibold text-indigo-400 hover:text-indigo-300">
                Download CV <span aria-hidden="true">→</span>
              </a>
            </nav>
          </div>
        </Dialog>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


