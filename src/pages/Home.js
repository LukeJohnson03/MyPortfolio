import React from 'react';
import '../App.css';

const Home = () => { 
    return (
        <div className="bg-zinc-800 text-gray-200">
    
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
    
      <div className="mx-auto max-w-3xl text-center py-32 sm:py-48 lg:py-36 mt-2">
      <h1 className="text-8xl font-bold tracking-tight sm:text-6xl lg:py-1 text-gray-200 animate-fade-in">
        Welcome to My Portfolio
      </h1>
      <p className="mt-6 text-4xl leading-8 font-bold text-white animate-fade-in delay-200">
        Hi.
      </p>
      <p className="mt-6 text-3xl leading-8 font-semibold text-white animate-fade-in delay-400">
        My name is Luke Johnson
      </p>
      <p className="mt-6 text-2xl leading-8 text-white animate-fade-in delay-600">
        I'm an aspiring software developer with a Bachelor's degree in computer and information sciences specifically in application development. I have worked with a variety of languages, frameworks and technologies, and I would like to showcase my skills as well as a few of things I've done over the years!
      </p>
      <div className="mt-10 flex justify-center gap-x-6 animate-fade-in delay-800">
        <a
          href="/projects"
          className="rounded-md bg-indigo-600 px-4 py-2 text-2xl font-semibold text-white hover:bg-indigo-500"
        >
          View Projects
        </a>
      </div>
    </div>
    </main>
    
      <section id="Certifications" className="py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-gray-200">My Certifications</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-gray-200">Bachelor of Computer and Information Sciences in Application Development</h3>
              <p className="mt-2 text-gray-400">
                IIE Varsity College Nelson Mandela Bay
              </p>
              <div className="mt-10 flex justify-center gap-x-6 animate-fade-in delay-800">
        <a
          href="#projects"
          className="rounded-2xl bg-indigo-600 px-4 py-2 text-2xl font-semibold text-white hover:bg-indigo-500"
        >
          View Certificate
        </a>
      </div>
            </div>
          </div>
        </div>
      </section>
    
      <section id="skills" className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-gray-200">My Skills</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* List your skills */}
            <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        alt="C#"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">C#</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        alt="Java"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Java</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        alt="Kotlin"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Kotlin</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="Python"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Python</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        alt="Javascript"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">JavaScript</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
        alt="HTML"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">HTML</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
        alt="CSS"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">CSS</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Tailwind</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        alt="SQL"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">SQL</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        alt="SQL"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">GitHub</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
        alt="Azure"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Azure</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg"
        alt="Blazor"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Blazor</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
        alt="Firebase"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">Firebase</span>
      </div>
    </div>
    <div className="group relative w-28 h-28 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex items-center justify-center">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        className="max-w-16 max-h-16 object-contain mb-4"
      />
      <div className="absolute bottom-0 w-full h-6 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-200 text-lg font-semibold">React</span>
      </div>
    </div>
          </div>
      </div>
      </section>
    
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-gray-200 mt-0">Social Links</h2>
    <div class="flex items-center gap-4 justify-center mt-6">
      <div class="social-button">
        <button class="relative w-12 h-12 rounded-full group">
          <div
            class="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
          ></div>
          <div
            class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-[#171543] fill-white duration-300"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div class="social-button">
        <button class="relative w-12 h-12 rounded-full group">
          <div
            class="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
          ></div>
          <div
            class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-[#171543] fill-white duration-300"
                d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div class="social-button">
        <button class="relative w-12 h-12 rounded-full group">
          <div
            class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
          ></div>
          <div
            class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
          >
            <svg
              height="32"
              width="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-[#171543] fill-white duration-300"
                d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-6">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Luke Johnson. All rights reserved.
        </div>
      </footer>
    </div>
      );
    }

export default Home;
    