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
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Portfolio</span>
          <img
            alt="Logo"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </a>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#projects" className="text-sm font-semibold text-gray-200 hover:text-indigo-400">
          Projects
        </a>
        <a href="#skills" className="text-sm font-semibold text-gray-200 hover:text-indigo-400">
          Skills
        </a>
        <a href="#about" className="text-sm font-semibold text-gray-200 hover:text-indigo-400">
          About Me
        </a>
        <a href="#contact" className="text-sm font-semibold text-gray-200 hover:text-indigo-400">
          Contact
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#resume"
          className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
        >
          Download Resume <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  </header>

  <main className="relative isolate px-6 pt-24 lg:px-8">
    <div className="mx-auto max-w-3xl text-center py-32 sm:py-48 lg:py-56">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Welcome to My Portfolio
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-400">
        Hi, I’m [Your Name]. A passionate [Your Profession/Field] specializing in [Your Key Skills]. Explore my projects, skills, and story below!
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          href="#projects"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-indigo-400 hover:text-indigo-400"
        >
          Contact Me
        </a>
      </div>
    </div>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
      />
    </div>
  </main>

  <section id="projects" className="py-16">
    <div className="mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-gray-200">My Projects</h2>
      <p className="mt-4 text-center text-gray-400">
        Here are some of the projects I've worked on:
      </p>
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
      <h2 className="text-3xl font-bold text-gray-200">My Skills</h2>
      <p className="mt-4 text-gray-400">
        Here are some of the tools and technologies I excel at:
      </p>
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
      <h2 className="text-3xl font-bold text-gray-200">Contact Me</h2>
      <p className="mt-4 text-gray-400">
        Interested in collaborating or just want to say hi? Reach out!
      </p>
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
