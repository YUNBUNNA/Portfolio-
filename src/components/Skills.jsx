import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaFigma, FaGithub, FaJava,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiPostgresql, SiPhp, SiLaravel,
  SiC, SiCplusplus, SiMysql,
} from 'react-icons/si'

const mainSkills = [
  { icon: FaHtml5,      name: 'HTML5',      color: '#e34f26' },
  { icon: FaCss3Alt,    name: 'CSS3',       color: '#1572b6' },
  { icon: FaJs,         name: 'JavaScript', color: '#f7df1e' },
  { icon: FaReact,      name: 'React',      color: '#61dafb' },
  { icon: SiTailwindcss,name: 'Tailwind',   color: '#38bdf8' },
  { icon: FaNodeJs,     name: 'Node.js',    color: '#68a063' },
  { icon: SiPhp,        name: 'PHP',        color: '#8892be' },
  { icon: SiLaravel,    name: 'Laravel',    color: '#ff2d20' },
]

const extraSkills = [
  { icon: FaPython,     name: 'Python',     color: '#ffd43b' },
  { icon: SiC,          name: 'C',          color: '#A8B9CC' },
  { icon: SiCplusplus,  name: 'C++',        color: '#00599C' },
  { icon: SiMysql,      name: 'MySQL',      color: '#4479a1' },
  { icon: SiPostgresql, name: 'PostgreSQL',  color: '#336791' },
  { icon: FaFigma,      name: 'Figma',      color: '#f24e1e' },
  { icon: FaGithub,     name: 'GitHub',     color: '#ffffff' },
  { icon: FaJava,       name: 'Java',       color: '#f89820' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
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
            What I Know
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Main skill cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-14"
        >
          {mainSkills.map(({ icon: Icon, name, color }) => (
            <motion.div
              key={name}
              variants={item}
              className="group glass-card rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default"
              whileHover={{
                y: -8,
                boxShadow: `0 0 30px ${color}33, 0 20px 40px rgba(0,0,0,0.3)`,
                borderColor: `${color}44`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Icon
                size={48}
                style={{ color, filter: `drop-shadow(0 0 8px ${color}80)` }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-semibold" style={{ color: '#cbd5e1' }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra skills row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#94a3b8' }}>
            Also Familiar With
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {extraSkills.map(({ icon: Icon, name, color }) => (
            <motion.div
              key={name}
              variants={item}
              className="flex flex-col items-center gap-3 cursor-default"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(15,23,42,0.7)',
                  border: '1px solid rgba(168,85,247,0.15)',
                }}
              >
                <Icon
                  size={32}
                  style={{ color, filter: `drop-shadow(0 0 6px ${color}80)` }}
                />
              </div>
              <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
