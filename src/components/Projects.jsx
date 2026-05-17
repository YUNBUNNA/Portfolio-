import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import dshImg from '../assets/dsh-preview.png'
import choullanImg from '../assets/choullan-preview.png'

const projects = [
  {
    title: 'Hand4Hope — Hands of Hope',
    description:
      'A community-driven humanitarian platform connecting volunteers and donors with charitable causes. Built with a full-stack architecture to manage events, outreach campaigns, and community engagement in real time.',
    tech: ['React', 'Tailwind', 'Laravel', 'PHP', 'MySQL'],
    image: null,
    github: 'https://github.com/AHBOYPHANNETH/Hand4HopeFulll',
    demo: 'https://hand4hope.vercel.app/',
    accent: '#a855f7',
  },
  {
    title: 'DSH — Digital Sports & Health',
    description:
      'A sports club and health platform offering training programs, nutritional guidance, and fitness communities. Members can join activities like football, volleyball, running, basketball, swimming, and cycling with free or premium coaching plans.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: dshImg,
    github: 'https://github.com/YUNBUNNA/DSH',
    demo: 'https://dsh1.netlify.app/',
    accent: '#ec4899',
  },
  {
    title: 'Choullan — Car Rental',
    description:
      'A car rental booking platform where users can browse vehicles by type and brand, select pickup and return dates, and reserve instantly. Features premium vehicles including Audi, BMW, Honda, and Toyota with 24/7 roadside support.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: choullanImg,
    github: 'https://github.com/YUNBUNNA/Chuollan-',
    demo: 'https://choullan.netlify.app/',
    accent: '#7c3aed',
  },
  {
    title: 'E-Learning App',
    description:
      'A full-featured mobile learning platform built with Flutter and Firebase. Includes course catalog, video lessons, quizzes, progress tracking, certificates, cart & payment, discussion, notifications, instructor dashboard, and admin panel.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    image: null,
    github: 'https://github.com/YUNBUNNA/E_learning_app',
    demo: null,
    accent: '#06b6d4',
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
                  className="w-full h-96 rounded-2xl overflow-hidden relative"
                  style={{
                    border: `1px solid ${project.accent}33`,
                    boxShadow: `0 0 30px ${project.accent}22`,
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-3"
                      style={{ background: `linear-gradient(135deg, ${project.accent}22, #0f172a)` }}
                    >
                      <span className="text-5xl font-black opacity-20" style={{ color: project.accent }}>
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                        Coming Soon
                      </span>
                    </div>
                  )}
                  {/* Hover overlay with tech badges */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-md font-medium"
                          style={{
                            background: `${project.accent}33`,
                            border: `1px solid ${project.accent}66`,
                            color: '#fff',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
                  {project.demo && (
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
                  )}
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
