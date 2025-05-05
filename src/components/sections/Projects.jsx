import React from "react";
import { RevealOnScroll } from '../RevealOnScroll'

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Cubee - Video Streaming webapp
            </h3>
            <p className="text-gray-400 mb-4">
              • Developed "Cubee," an online video streaming platform using
              ReactJS, Material UI, and RapidAPI, integrating the YouTube V3 API
              to dynamically fetch and display over 1,000 videos across various
              categories. <br /> • Implemented a search functionality enabling
              users to retrieve videos with 95% accuracy based on keywords, and
              designed a responsive UI to enhance user experience across
              devices.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {["ReactJS", "MaterialUI", "RapidAPI", "Vercel"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://cubee-seven.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Shoppy - A react Admin Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              • Developed a React Admin Dashboard App featuring customizable
              theming, dark/light mode, and 100% mobile responsiveness,
              enhancing usability across devices. <br /> • Designed an admin
              panel with 1 dashboard, 3 pages, and 4 fully functional apps
              (calendar, Kanban, editor, and color picker) for comprehensive
              data management. • Integrated 7 interactive charts to visualize
              metrics like earnings, recent transactions, and sales overview,
              improving data insights for users
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {["ReactJS", "TailwindCSS", "Syncfusion"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AY-us-H/shoppy-dashboard"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
            <p className="text-gray-400 mb-4">
              • Developed a responsive portfolio website using React.js and
              Tailwind CSS, featuring an animated loading screen managed with
              useState and useEffect hooks for seamless user experience. <br />{" "}
              • Implemented key sections, including a dynamic home introduction,
              an interactive skills display, a project showcase, and a
              functional contact form integrated with EmailJS for direct
              communication
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {["ReactJS", "TailwindCSS", "EmailJS API", "Vercel"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AY-us-H/portfolio"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
