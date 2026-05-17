import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { HiPaperAirplane } from 'react-icons/hi'

const socials = [
  { icon: FaGithub,   href: 'https://github.com/YUNBUNNA',                     label: 'GitHub',   color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yun-bunna-abb961332/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: FaTelegram, href: 'https://t.me/Yun_Bunna',                           label: 'Telegram', color: '#26a5e4' },
  { icon: MdEmail,    href: 'mailto:yunbunna123@gmail.com',          label: 'Email',    color: '#ec4899' },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = `
    w-full bg-transparent rounded-xl px-4 py-3 text-sm text-white outline-none
    transition-all duration-300 placeholder-slate-500
  `
  const inputStyle = {
    background: 'rgba(15,23,42,0.7)',
    border: '1px solid rgba(168,85,247,0.2)',
  }
  const inputFocusStyle = 'focus:shadow-[0_0_0_2px_rgba(168,85,247,0.4)]'

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#0f172a' }}>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
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
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Together</h3>
              <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                I&apos;m currently open to internship opportunities and exciting projects.
                Whether you have a question, a proposal, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
                >
                  <MdEmail size={20} style={{ color: '#a855f7' }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#94a3b8' }}>Email</p>
                  <p className="text-sm font-medium text-white">yunbunna123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(236,72,153,0.3)' }}
                >
                  <MdLocationOn size={20} style={{ color: '#ec4899' }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#94a3b8' }}>Location</p>
                  <p className="text-sm font-medium text-white">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.7)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    color: '#94a3b8',
                  }}
                  whileHover={{
                    scale: 1.15,
                    color,
                    borderColor: color,
                    boxShadow: `0 0 20px ${color}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: '#94a3b8' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block" style={{ color: '#94a3b8' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium mb-2 block" style={{ color: '#94a3b8' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Yun Bunna, I'd love to discuss..."
                required
                rows={5}
                className={`${inputClass} ${inputFocusStyle} resize-none`}
                style={inputStyle}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                boxShadow: '0 0 25px rgba(168,85,247,0.35)',
              }}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02, boxShadow: '0 0 40px rgba(168,85,247,0.55)' }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' && <>Sending…</>}
              {status === 'sent'    && <>Message Sent!</>}
              {status === 'error'   && <>Failed — try again</>}
              {status === 'idle'    && (
                <>
                  <HiPaperAirplane size={18} className="-rotate-45" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
