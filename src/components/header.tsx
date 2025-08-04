/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi' // ICON

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [y, setY] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(0) // Default di "Home"
  const containerRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<{ x: number; width: number }[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    const items = Array.from(containerRef.current.querySelectorAll('.nav-item'))
    const newPos = items.map((el: any) => {
      const rect = el.getBoundingClientRect()
      return { x: el.offsetLeft, width: rect.width }
    })
    setPositions(newPos)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY)
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  console.log(y)

  return (
    <header
      className={`w-full h-20 fixed flex justify-center items-center z-[9999] ${
        isScrolled ? 'top-2' : 'top-0'
      } transition-all`}
    >
      <div
        className={`h-full bg-[#181818] transition-all ${
          isScrolled ? 'rounded-full w-4/5 px-8 py-3' : 'w-full px-6 py-2'
        }  flex justify-between items-center`}
      >
        <div className='flex gap-4 justify-center items-center '>
          <Image
            src='/assets/logo nts 1/logo.png'
            alt='Logo'
            width={40}
            height={40}
            className=''
          />
          <h1 className='text-xl font-semibold text-white  hidden md:flex'>
            PT Namura Tehnik Sejahtera
          </h1>
          <h1 className='text-xl font-semibold text-white  flex md:hidden'>
            PT NTS
          </h1>
        </div>
        <div className=' justify-center items-center md:flex hidden'>
          <nav className='flex  text-white text-xl'>
            <div ref={containerRef} className='flex gap-[6px] relative'>
              {/* Kotak highlight elegan */}
              {positions[hoveredIndex] && (
                <motion.div
                  className='absolute top-1 bottom-1 bg-[#325775] rounded-md z-0 shadow-sm shadow-[#32577544]'
                  animate={{
                    x: positions[hoveredIndex].x,
                    width: positions[hoveredIndex].width
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              {/* Link navigasi */}
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className='nav-item px-2 py-2 relative z-10 text-white  transition-colors'
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-3xl focus:outline-none'
          >
            <motion.div
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.div>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-[#181818] w-full px-6  text-white text-lg space-y-2 absolute top-20 ${menuOpen ? "py-4" : "py-0"}`}
      >
        {menuOpen &&
          navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className='block py-2 border-b border-white/10'
            >
              {item.name}
            </Link>
          ))}
      </motion.div>
    </header>
  )
}

export default Header
