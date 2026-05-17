import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  FaGithub, FaLinkedin, FaTelegram,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import profileImg from '../assets/profile.jpg'

const socials = [
  { icon: FaGithub, href: 'https://github.com/YUNBUNNA', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yun-bunna-abb961332/', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/Yun_Bunna', label: 'Telegram' },
  { icon: MdEmail, href: 'mailto:yunbunna123@gmail.com', label: 'Email' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <motion.p
            {...fadeUp(0.1)}
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#a855f7' }}
          >
            ✦ IT Engineering Student · RUPP
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
          >
            I Am{' '}
            <span className="gradient-text">Yun Bunna</span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="text-2xl sm:text-3xl font-semibold text-white">
            <span style={{ color: '#94a3b8' }}>I&apos;m a </span>
            <TypeAnimation
              sequence={[
                'Web Developer',        2000,
                'Full-Stack Developer', 2000,
                'UI Designer',          2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="text-base leading-relaxed max-w-lg"
            style={{ color: '#94a3b8' }}
          >
            Information Technology Engineering student at RUPP, focused on web development.
            I blend clean code with creative design — from React front-ends to Laravel and
            Node.js backends — building applications that are as beautiful as they are functional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                boxShadow: '0 0 25px rgba(168,85,247,0.4)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>

            <motion.a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid rgba(168,85,247,0.5)',
                color: '#a855f7',
                background: 'transparent',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: '#a855f7',
                boxShadow: '0 0 25px rgba(168,85,247,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div {...fadeUp(0.6)} className="flex gap-4 mt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
                style={{
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: '#94a3b8',
                }}
                whileHover={{
                  scale: 1.2,
                  color: '#a855f7',
                  borderColor: '#a855f7',
                  boxShadow: '0 0 20px rgba(168,85,247,0.4)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Content — Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center relative"
        >
          {/* Floating blur blobs behind card */}
          <div
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
              filter: 'blur(30px)',
              top: '10%',
              left: '10%',
            }}
          />
          <div
            className="absolute w-56 h-56 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
              filter: 'blur(30px)',
              bottom: '5%',
              right: '5%',
            }}
          />

          <motion.div
            className="relative glass-card rounded-3xl p-2 cursor-pointer"
            style={{
              boxShadow: '0 0 40px rgba(168,85,247,0.35), 0 0 80px rgba(168,85,247,0.1)',
              rotate: '-3deg',
            }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div
              className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
              }}
            >
              <img
                src={profileImg}
                alt="Yun Bunna"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3"
              style={{ boxShadow: '0 0 20px rgba(236,72,153,0.3)' }}
            >
              <p className="text-xs font-semibold" style={{ color: '#ec4899' }}>Available for Internship</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#94a3b8' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(180deg, #a855f7, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
