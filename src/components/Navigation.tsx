'use client'

import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Ayurveda', href: '/ayurveda' },
  { label: 'Contact', href: '#contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleSectionNav = (e: React.MouseEvent, section: string) => {
    e.preventDefault()
    setIsOpen(false)
    if (pathname === '/') {
      // Already on homepage, just scroll
      const el = document.querySelector(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to homepage with hash
      router.push('/' + section)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' })
          }, 100) // slight delay to ensure DOM is ready
        }
      }
    }
  }, [])

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Yoga4Wellness
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-accent transition-colors"
                  onClick={e => handleSectionNav(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) =>
                  item.href.startsWith('#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-accent transition-colors text-left"
                      onClick={e => handleSectionNav(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-accent transition-colors text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 