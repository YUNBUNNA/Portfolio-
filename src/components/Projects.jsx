import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Look Great V2',
    description:
      'A modern fashion e-commerce platform with product browsing, cart management, and user authentication. Features a sleek UI with advanced filtering and real-time search.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-purple-600/20 to-pink-600/20',
    accent: '#a855f7',
  },
  {
    title: 'Memory Game',
    description:
      'An interactive card-flipping memory game built with vanilla JavaScript. Includes difficulty levels, countdown timer, score tracking, and smooth flip animations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-pink-600/20 to-rose-600/20',
    accent: '#ec4899',
  },
  {
    title: 'Member Only',
    description:
      'A members-only forum application where users can post anonymous messages. Implements passport.js authentication, session management, and role-based access control.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-violet-600/20 to-purple-600/20',
    accent: '#7c3aed',
  },
  {
    title: 'Volunteer Platform',
    description:
      'A full-stack platform connecting volunteers with non-profit organisations. Features event listing, volunteer registration, admin dashboard, and email notifications.',
    tech: ['React', 'Django', 'PostgreSQL', 'REST API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    gradient: 'from-fuchsia-600/20 to-pink-600/20',
    accent: '#d946ef',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute top-1/3 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#a855f7' }}>
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects list — alternating layout */}
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image / Visual block */}
              <motion.div
                className="w-full lg:w-1/2 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div
                  className={`w-full h-64 rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden relative`}
                  style={{
                    border: `1px solid ${project.accent}33`,
                    boxShadow: `0 0 30px ${project.accent}22`,
                  }}
                >
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}30 1px, transparent 1px), linear-gradient(90deg, ${project.accent}30 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-6xl font-black opacity-10"
                      style={{ color: project.accent }}
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div
                    className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md font-medium"
                        style={{
                          background: `${project.accent}22`,
                          border: `1px solid ${project.accent}44`,
                          color: project.accent,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Text block */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: project.accent }}
                >
                  Featured Project
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{project.title}</h3>

                <div
                  className="glass-card rounded-xl p-5"
                  style={{ borderColor: `${project.accent}20` }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accent}35`,
                        color: project.accent,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-2">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}, #ec4899)`,
                      boxShadow: `0 0 20px ${project.accent}40`,
                    }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.accent}60` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold"
                    style={{
                      border: `1px solid ${project.accent}44`,
                      color: project.accent,
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: project.accent,
                      boxShadow: `0 0 20px ${project.accent}30`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={15} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
