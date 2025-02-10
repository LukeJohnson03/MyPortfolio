import { motion } from 'framer-motion';
import '../App.css';

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen flex flex-col">
      <main className="pt-24 lg:px-8 bg-gray-800 flex-grow">
        <div className="mx-auto max-w-4xl text-center py-16">
          <h1 className="text-6xl font-bold tracking-tight text-gray-200">Projects</h1>
          <p className="mt-6 text-2xl text-gray-400">
            A showcase of my latest work.
          </p>
        </div>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: '/Num Num No Back.png',
                  title: 'Num Num Foods PWA',
                  description:
                    'A seamless and efficient platform for purchasing affordable and nutritious baby food.',
                },
                {
                  img: '/smartspend_app_logo.png',
                  title: 'SmartSpend',
                  description:
                    'A comprehensive finance management app for tracking income, expenses, and goals.',
                },
                {
                  img: '/TimeWise Logo.png',
                  title: 'TimeWise',
                  description:
                    'A time management app for creating timesheets, scheduling events, and tracking progress.',
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} Thumbnail`}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                  <a href="/projects/details" className="mt-4 self-start rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
                    View Details
                    (Coming Soon!)
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Luke Johnson. All rights reserved. 
            Made with React.js and Tailwind CSS
          </div>
        </footer>
    </div>
  );
}

export default Projects;