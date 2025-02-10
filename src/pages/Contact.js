import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xpwqlgbj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus("Failed to send message ❌. Try again.");
      }
    } catch (error) {
      setStatus("Something went wrong ❌.");
    }
  };

  return (
    <div className="bg-zinc-800 text-gray-200 min-h-screen">
      <main className="relative isolate px-6 pt-24 lg:px-8 bg-gray-800">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-xl animate-move-circles"
            style={{ animationDuration: "10s" }}
          />
          <div
            className="absolute left-2/3 top-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 opacity-50 blur-xl animate-move-circles"
            style={{ animationDuration: "12s" }}
          />
          <div
            className="absolute left-1/5 top-2/3 h-72 w-72 rounded-full bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 opacity-50 blur-xl animate-move-circles"
            style={{ animationDuration: "15s" }}
          />
        </div>

        <div className="mx-auto max-w-3xl text-center py-32 sm:py-48 lg:py-36 mt-2">
          <h1 className="text-8xl font-bold tracking-tight sm:text-6xl lg:py-1 text-gray-200 animate-fade-in">
            Contact Me
          </h1>
          <p className="mt-6 text-3xl leading-8 text-white animate-fade-in delay-200">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
      </main>

      <section id="contact-form" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-xl font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-3 text-xl font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && <p className="text-center mt-4 text-lg text-indigo-400">{status}</p>}
        </div>
      </section>

      <footer className="bg-gray-900 py-6">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Luke Johnson. All rights reserved.
          Made with React.js and Tailwind CSS
        </div>
      </footer>
    </div>
  );
};

export default Contact;