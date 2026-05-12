import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const navLinks = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact' },
]

const socials = [
  { icon: FaGithub,   href: 'https://github.com',           label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com',          label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me',                  label: 'Telegram' },
  { icon: MdEmail,    href: 'mailto:yunbunna123@gmail.com',  label: 'Email' },
]

const scrollTo = id => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: 'rgba(5,5,5,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(168,85,247,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Left — Brand */}
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollTo('home')} className="text-2xl font-black gradient-text text-left">
              Yun Bunna
            </button>
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              Building digital experiences that blend clean code with creative design.
            </p>
          </div>

          {/* Center — Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#a855f7' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <motion.button
                    onClick={() => scrollTo(id)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#94a3b8' }}
                    whileHover={{ color: '#a855f7', x: 4 }}
                  >
                    {label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Social */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#a855f7' }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    color: '#94a3b8',
                  }}
                  whileHover={{
                    scale: 1.15,
                    color: '#a855f7',
                    borderColor: '#a855f7',
                    boxShadow: '0 0 15px rgba(168,85,247,0.35)',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} Yun Bunna. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#64748b' }}>
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
