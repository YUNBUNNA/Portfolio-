import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiDownload } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#0f172a' }}>
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                filter: 'blur(20px)',
                opacity: 0.4,
                transform: 'scale(1.05)',
              }}
            />
            <motion.div
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden"
              style={{
                border: '2px solid rgba(168,85,247,0.4)',
                boxShadow: '0 0 40px rgba(168,85,247,0.25)',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <img
                src={profileImg}
                alt="Yun Bunna"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Content */}
        <div className="flex flex-col gap-6">
          <motion.p {...fadeUp(0.1)} className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#a855f7' }}>
            About Me
          </motion.p>

          <motion.h2 {...fadeUp(0.2)} className="text-4xl sm:text-5xl font-black leading-tight">
            Who Am <span className="gradient-text">I</span>
          </motion.h2>

          <motion.p {...fadeUp(0.3)} className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
            I&apos;m an Information Technology Engineering student at RUPP&apos;s Faculty of Engineering,
            actively seeking internship opportunities to grow in a real-world environment. My focus is
            web development — building full-stack applications with modern tools like React, Node.js,
            PHP, and Laravel that are clean, functional, and visually engaging.
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
            I&apos;ve volunteered at the RUPP Engineering Day in 2023 and 2024, completed intensive
            training at ISTAD and ANT, and shipped real-world projects — from a humanitarian volunteer
            platform to a sports &amp; health site and a car rental booking app. I thrive in team
            environments and am always eager to take on new challenges.
          </motion.p>

          {/* Stats row */}
          <motion.div {...fadeUp(0.45)} className="grid grid-cols-3 gap-6 py-4">
            {[
              { value: '10+', label: 'Projects' },
              { value: '2+', label: 'Volunteering' },
              { value: '3+', label: 'Years Coding' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-black gradient-text">{value}</p>
                <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.a
            {...fadeUp(0.5)}
            href="/cv.pdf"
            download
            className="self-start flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              border: '1px solid rgba(168,85,247,0.5)',
              color: '#a855f7',
            }}
            whileHover={{
              scale: 1.05,
              borderColor: '#a855f7',
              boxShadow: '0 0 25px rgba(168,85,247,0.3)',
              background: 'rgba(168,85,247,0.05)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload size={18} />
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  )
}
