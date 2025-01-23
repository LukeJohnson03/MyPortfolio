import './App.css';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-zinc-800 text-gray-200">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
      
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#projects" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
          Home
        </a>
        <a href="#skills" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
          Skills
        </a>
        <a href="#about" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
          Projects
        </a>
        <a href="#contact" className="text-2xl font-semibold text-gray-200 hover:text-indigo-400">
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

  <main className="relative isolate px-6 pt-24 lg:px-8 bg-gray-800">
  <div
    className="absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div
      className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-xl animate-move-circles"
      style={{ animationDuration: '10s' }}
    />
    <div
      className="absolute left-2/3 top-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 opacity-50 blur-xl animate-move-circles"
      style={{ animationDuration: '12s' }}
    />
    <div
      className="absolute left-1/5 top-2/3 h-72 w-72 rounded-full bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 opacity-50 blur-xl animate-move-circles"
      style={{ animationDuration: '15s' }}
    />
  </div>

  {/* Hero Content */}
  <div className="mx-auto max-w-3xl text-center py-32 sm:py-48 lg:py-56">
    <h1 className="text-8xl font-bold tracking-tight sm:text-6xl text-gray-200">
      Welcome to My Portfolio
    </h1>
    <p className="mt-6 text-4xl leading-8 font-bold text-white">
      Hi.
    </p>
    <p className="mt-6 text-3xl leading-8 font-semibold text-white">
      My name is Luke Johnson
    </p>
    <p className="mt-6 text-2xl leading-8 text-white">
      I'm an aspiring software developer with a Bachelor's degree in computer and information sciences specifically in application development. I have worked with a variety of languages, frameworks and technologies, and I would like to showcase my skills as well as a few of things I've done over the years!
    </p>
    <div className="mt-10 flex justify-center gap-x-6">
      <a
        href="#projects"
        className="rounded-md bg-indigo-600 px-4 py-2 text-2xl font-semibold text-white hover:bg-indigo-500"
      >
        View Projects
      </a>
    </div>
  </div>
</main>

  <section id="projects" className="py-16">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-5xl font-bold text-center text-gray-200">My Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Add your project cards here */}
        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="text-xl font-semibold text-gray-200">Project Title</h3>
          <p className="mt-2 text-gray-400">
            Brief description of the project. Add more details about its features or technology stack.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" className="bg-zinc-900 py-16">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-5xl font-bold text-gray-200">My Skills</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* List your skills */}
        <span className="rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200">
          JavaScript
        </span>
        <span className="rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200">
          React
        </span>
        <span className="rounded-full bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-200">
          Tailwind CSS
        </span>
      </div>
    </div>
  </section>

  <section id="contact" className="py-16">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-5xl font-bold text-gray-200">Contact Me</h2>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-gray-200"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-gray-200"
        />
        <textarea
          placeholder="Your Message"
          className="w-full rounded-md bg-gray-700 px-4 py-2 text-gray-200"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</div>
  );
}

export default App;
