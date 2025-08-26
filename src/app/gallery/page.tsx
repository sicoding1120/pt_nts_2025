import Footer from '@/components/footer'
import Header from '@/components/header'
import { News, NewsType, Training, TrainingType } from '@/data/training'
import Image from 'next/image'
import React from 'react'
import { FaUsers } from 'react-icons/fa'

const lineStampingImages = [
  '/assets/background.jpeg',
  '/assets/stamping1.jpeg',
  '/assets/stamping2.jpeg',
  '/assets/stamping3.jpeg',
  '/assets/image1nts.jpg',
  '/assets/img1.jpeg'
]
const LineEDPPlatting = [
  '/assets/img2.jpeg',
  '/assets/img3.jpeg',
  '/assets/img4.jpeg',
  '/assets/img5.jpeg',
  '/assets/img6.jpeg',
  '/assets/img7.jpeg'
]

const GalleryPage = () => {
  return (
    <main className='w-full h-full'>
      <Header />
      <section className='w-full h-[30vh] md:h-[50vh] relative bg-gallery md:mt-0 mt-20 md:bg-fixed md:bg-center'>
        <div className='absolute inset-0 bg-black/70 flex items-center justify-center'>
          <h2 className='text-white text-3xl font-bold'>Our Gallery</h2>
        </div>
      </section>
      <section className='w-full h-full flex flex-col items-center mt-10 mb-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='md:text-5xl text-4xl font-bold capitalize text-center '>
            employee training
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-full px-8 grid md:grid-cols-4 grid-cols-1 gap-6 mt-6'>
          {Training.map((d: TrainingType) => (
            <div
              className='w-full h-[400px] shadow-sm rounded-xl border p-4 flex flex-col gap-4'
              key={d.id}
            >
              <div className='w-full h-1/2 bg-red-500 rounded-xl overflow-hidden'>
                <Image
                  src={d.src}
                  alt={d.title}
                  width={300}
                  height={300}
                  className='w-full h-full '
                />
              </div>
              <div className='w-full h-1/2 flex flex-col gap-2 justify-between pb-4'>
                <p className='text-center'>
                  {d.title}
                </p>
                <div className='flex items-center gap-4 justify-center'>
                  <div className='flex gap-1 text-black/30 items-center'>
                    <FaUsers size={20} />
                    <span>{d.people}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full h-full flex flex-col items-center mt-10 mb-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='md:text-5xl text-4xl font-bold capitalize text-center '>
            News
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-full px-8 grid md:grid-cols-4 grid-cols-1 gap-6 mt-6'>
          {News.map((d: NewsType) => (
            <div
              className='w-full h-[400px] shadow-sm rounded-xl border p-4 flex flex-col gap-4'
              key={d.id}
            >
              <div className='w-full h-1/2 bg-red-500 rounded-xl overflow-hidden'>
                <Image
                  src={d.src}
                  alt={d.title}
                  width={300}
                  height={300}
                  className='w-full h-full '
                />
              </div>
              <div className='w-full h-1/2 flex flex-col gap-2 justify-between pb-4'>
                <p className='text-center'>
                  {d.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full h-full flex flex-col items-center gap-8 mt-6 px-8 pb-6'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='md:text-5xl text-4xl font-bold capitalize text-center '>
            Line Stamping
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 gap-6'>
          {lineStampingImages.map((src: string, i: number) => (
            <div
              key={i}
              className='w-full h-full bg-red-500 rounded-xl hover:scale-105 transition-all'
            >
              <Image
                src={src}
                alt={`Line Stamping ${i + 1}`}
                width={500}
                height={500}
                className='w-full h-[300px] object-cover rounded-xl'
              />
            </div>
          ))}
        </div>
      </section>
      <section className='w-full h-full flex flex-col items-center gap-8 mt-6 px-8 pb-6'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='md:text-5xl text-4xl font-bold capitalize text-center '>
            Line EDP & Platting
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 gap-6'>
          {LineEDPPlatting.map((src: string, i: number) => (
            <div
              key={i}
              className='w-full h-full bg-red-500 rounded-xl hover:scale-105 transition-all'
            >
              <Image
                src={src}
                alt={`Line Stamping ${i + 1}`}
                width={500}
                height={500}
                className='w-full h-[300px] object-cover rounded-xl'
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default GalleryPage
