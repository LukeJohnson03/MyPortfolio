import './App.css';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-zinc-800 text-gray-200">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
                Home
              </Link>
              <Link to="/projects" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
                Projects
              </Link>
              <a href="#skills" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
                Skills
              </a>
              <a href="/contact" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
                Contact
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#cv"
                className="text-2xl font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Download CV <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
