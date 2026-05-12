import { motion } from 'framer-motion'
import { HiAcademicCap, HiUserGroup } from 'react-icons/hi'

const experiences = [
  {
    date: '2024 – Present',
    title: 'Hackathon Participant',
    org: 'Various Tech Events',
    desc: 'Competed in multiple hackathons, collaborating in teams to design and build full-stack solutions under tight deadlines.',
  },
  {
    date: '2023 – Present',
    title: 'Tech Community Member',
    org: 'Developer Community KH',
    desc: 'Actively engaged in local developer meetups, workshops, and knowledge-sharing sessions to grow alongside peers.',
  },
  {
    date: '2023',
    title: 'Volunteer IT Support',
    org: 'Campus Events',
    desc: 'Assisted in setting up and managing technical infrastructure for university events and student-led workshops.',
  },
]

const education = [
  {
    date: '2022 – Present',
    title: 'Software Development',
    org: 'University of Puthisastra',
    desc: 'Bachelor degree programme covering full-stack web development, algorithms, databases, and software engineering principles.',
  },
  {
    date: '2024',
    title: 'Full Stack JavaScript',
    org: 'Bootcamp / Self-Study',
    desc: 'Intensive training covering Node.js, React, REST APIs, PostgreSQL, and modern JavaScript best practices.',
  },
  {
    date: '2023',
    title: 'Web Design',
    org: 'Online Course',
    desc: 'UI/UX fundamentals, Figma prototyping, responsive layouts, and accessibility-first design principles.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function Card({ item, icon: Icon }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300"
      whileHover={{
        y: -4,
        boxShadow: '0 0 30px rgba(168,85,247,0.2), 0 20px 40px rgba(0,0,0,0.3)',
      }}
    >
      {/* Gradient border top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
      />

      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
            border: '1px solid rgba(168,85,247,0.3)',
          }}
        >
          <Icon size={18} style={{ color: '#a855f7' }} />
        </div>

        <div className="flex-1">
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: '#ec4899' }}
          >
            {item.date}
          </span>
          <h3 className="text-white font-bold text-lg mt-1 leading-snug">{item.title}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: '#a855f7' }}>{item.org}</p>
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative" style={{ background: '#0f172a' }}>
      <div
        className="absolute top-1/2 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
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
            My Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <HiUserGroup size={22} style={{ color: '#a855f7' }} />
              <h3 className="text-xl font-bold text-white">Activities &amp; Involvement</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col gap-5"
            >
              {experiences.map(exp => (
                <Card key={exp.title} item={exp} icon={HiUserGroup} />
              ))}
            </motion.div>
          </div>

          {/* Education column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <HiAcademicCap size={22} style={{ color: '#ec4899' }} />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col gap-5"
            >
              {education.map(edu => (
                <Card key={edu.title} item={edu} icon={HiAcademicCap} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
