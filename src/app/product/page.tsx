/* eslint-disable @typescript-eslint/no-explicit-any */
// app/product/page.tsx
'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiSearch } from 'react-icons/fi'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { Filter, filters, Product, products } from '@/data/product'
import { FaX } from 'react-icons/fa6'

export default function ProductPage () {
  const [isFocused, setIsFocused] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [profilt, setProfilt] = useState<Product[]>(products)

  const handleFilter = (dt: Filter) => {
    console.log(dt.type)
    setProfilt(products.filter((d: Product) => d.type == dt.type))
  } 

  const handleSearch = (e: any) => {
    setProfilt(products.filter((d:Product)=> d.title.toLowerCase().includes(e.toLowerCase())))
  }

  console.log(profilt)

  return (
    <main className='w-full h-full'>
      <Header />

      <section className='w-full h-full mt-20 flex flex-col gap-6 pt-4'>
        <div className='flex h-20 items-center gap-4 px-8'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='w-full md:w-1/2'
          >
            <motion.div
              animate={{
                boxShadow: isFocused
                  ? '0px 0px 10px rgba(212, 175, 55, 0.5)'
                  : '0px 0px 0px transparent'
              }}
              transition={{ duration: 0.3 }}
              className='relative w-full h-12 rounded-full border-2 border-[#325775] flex items-center px-4 bg-white'
            >
              <FiSearch className='text-gray-500 mr-2' size={20} />
              <input
                type='text'
                onChange={(e)=> handleSearch(e.target.value)}
                placeholder='Search product...'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className='flex-1 outline-none bg-transparent placeholder-gray-400 text-sm'
              />
            </motion.div>
          </motion.div>
          <div className=' w-1/2 items-center gap-4 md:grid grid-cols-3 h-12 hidden'>
            {filters.map((d: Filter, i: number) => (
              <button
                key={i}
                onClick={() => handleFilter(d)}
                className='w-full h-full bg-[#181818] text-lg text-[#325775] flex justify-center items-center rounded-full capitalize font-semibold border-2 border-transparent hover:border-[#181818] hover:text-[#181818] transition-all hover:bg-transparent'
              >
                {d.title}
              </button>
            ))}
          </div>
          <button
            title='filter'
            className='w-1/6 flex items-center justify-center md:hidden text-[#325775]'
          >
            {filterOpen ? (
              <FaX size={24} onClick={() => setFilterOpen(false)} />
            ) : (
              <FiFilter size={24} onClick={() => setFilterOpen(true)} />
            )}
          </button>
          {filterOpen && (
            <div className='absolute bg-[#181818] w-1/3  md:hidden  right-8  top-42 rounded-xl  z-1 flex flex-col pt-2 pb-1'>
              {filters.map((d: Filter, i: number) => (
                <button
                  key={i}
                  onClick={() => handleFilter(d)}
                  className='w-full h-full bg-[#181818] text-[#ffff] hover:border-b-[#325775]  rounded-full capitalize font-semibold border-2 border-transparent transition-all hover:bg-transparent py-1 '
                >
                  {d.title}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className='w-full h-full px-8 py-4 grid md:grid-cols-4 grid-cols-1 gap-6 mb-12'>
          {profilt.map((d: Product) => (
            <div
              className='w-full h-[400px] shadow-md rounded-xl flex flex-col items-center gap-4 p-4 border'
              key={d.id}
            >
              <div className='relative w-full h-2/3 overflow-hidden rounded-md group'>
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: '-20%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  className='w-full h-auto'
                >
                  <Image
                    src={d.imageUrl}
                    alt={d.title}
                    width={800}
                    height={1000}
                    className='w-full h-auto object-cover'
                  />
                </motion.div>
              </div>
              <p className='text-center text-xl'>{d.title}</p>
              <Button>Read More</Button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
