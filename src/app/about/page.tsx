'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Button from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className='w-full h-full'>
      <Header />
      <section className='w-full md:h-full h-full flex flex-col md:flex-row pt-20'>
        <div className='md:w-1/2 w-full md:h-screen h-[300px] bg-about rounded-r-xl'></div>
        <div className='md:w-1/2 w-full h-full py-14 md:py-0 flex flex-col items-center gap-6 px-8'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='md:text-6xl text-4xl font-bold capitalize text-center '>
              Tentang Kami
            </h2>
            <span className='w-full h-1 bg-[#325775] rounded-full'></span>
          </div>
          <p className=' text-center pt-4'>
            Perusahaan Manufacture,Fabrikasi Dan EDP Dengan Layanan Prima Serta
            Memenuhi Kebutuhan dan Kepuasan Pelanggan
          </p>
          <p className='text-justify'>
            PT Namura Tehnik Sejahtera adalah Perusahaan Jasa
            Manufacture,Fabrikasi Dan EDP yang berdedikasi untuk menghasilkan
            produk berkualitas tinggi melalui proses Manufacture yang inovatif
            dan efisien. Berdiri kuat di balik prinsip-prinsip kualitas,
            keberlanjutan, dan keunggulan operasional, perusahaan ini telah
            mendedikasikan dirinya untuk memenuhi kebutuhan pelanggan dan
            membangun hubungan jangka panjang.
          </p>
          <span className='font-bold flex justify-start items-start w-full text-2xl'>
            VISI
          </span>
          <p className='text-justify'>
            menjadi Perusahaan Manufacture,Fabrikasi Dan EDP Dengan Layanan
            Prima Serta Memenuhi Kebutuhan dan Kepuasan Pelanggan. Mengedepankan
            keselamatan dan kesehatan kerja untuk meningkatkan produktivitas
            kerja Menciptakan kondisi kerja yang nyaman dan aman Menciptakan
            kondisi lapangan kerja dengan mengedepankan tenaga kerja yang handal
            dan berkemampuan pada bidangnya
          </p>
          <span className='font-bold flex justify-start items-start w-full text-2xl'>
            MISI
          </span>
          <p className='text-justify'>
            Menjadi perusahaan Manufacture,Fabrikasi Dan EDP terbaik,
            berkualitas dan terpercaya
          </p>
          <Button>Learn More</Button>
        </div>
      </section>
      <section className='w-full flex md:h-screen h-full flex-col items-center gap-4 md:mt-14 mt-8 mb-4'>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='md:text-6xl text-4xl font-bold capitalize text-center '>
              Legalitas
            </h2>
            <span className='w-full h-1 bg-[#325775] rounded-full'></span>
          </div>
        </div>
        <div className='w-full md:h-screen h-full px-8 flex md:flex-row flex-col  justify-between items-center'>
          <div className='md:w-1/2 w-full md:h-full  p-4 rounded-2xl overflow-hidden grid-cols-2 grid'>
            <div className='relative w-full h-[300px] overflow-hidden rounded-md group'>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: '-20%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className='w-full h-auto'
              >
                <Image
                  src={'/assets/legalitas/1.jpeg'}
                  alt={'legalitas 1'}
                  width={800}
                  height={1000}
                  className='w-full h-auto object-cover'
                />
              </motion.div>
            </div>
            <div className='relative w-full h-[300px] overflow-hidden rounded-md group'>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: '-20%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className='w-full h-auto'
              >
                <Image
                  src={'/assets/legalitas/2.jpeg'}
                  alt={'legalitas 2'}
                  width={800}
                  height={1000}
                  className='w-full h-auto object-cover'
                />
              </motion.div>
            </div>
            <div className='relative w-full h-[300px] overflow-hidden rounded-md group'>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: '-20%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className='w-full h-auto'
              >
                <Image
                  src={'/assets/legalitas/3.jpeg'}
                  alt={'legalitas 3'}
                  width={800}
                  height={1000}
                  className='w-full h-auto object-cover'
                />
              </motion.div>
            </div>
            <div className='relative w-full h-[300px] overflow-hidden rounded-md group'>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: '-20%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className='w-full h-auto'
              >
                <Image
                  src={'/assets/legalitas/4.jpeg'}
                  alt={'legalitas 4'}
                  width={800}
                  height={1000}
                  className='w-full h-auto object-cover'
                />
              </motion.div>
            </div>
          </div>
          <div className='md:w-1/2 w-full h-full p-4 rounded-2xl flex flex-col justify-center'>
            <div className='text-gray-700 md:text-lg text-sm leading-relaxed'>
              <p>
                <strong>Nama Perusahaan</strong> : PT Namura Tehnik Sejahtera
              </p>
              <p>
                <strong>Alamat</strong> : JL. Mercedes Benz No. 49 Cicadas
                Gunung Putri Kab.Bogor
              </p>
              <p>
                <strong>Direktur Utama</strong> : Joko Widodo
              </p>
              <p>
                <strong>Akta Pendirian No</strong> : 9
              </p>
              <p>
                <strong>Tanggal</strong> : 07 Januari 2020
              </p>
              <p>
                <strong>Notaris</strong> : Bambang Ariawan, SH
              </p>
              <p>
                <strong>SK Menkumham</strong> : AHU-0001895.AH.01.01.Tahun 2020
              </p>
              <p>
                <strong>Tanggal</strong> : 13 Januari 2020
              </p>
              <p>
                <strong>NPWP</strong> : 92.373.927.0-403.000
              </p>
              <p>
                <strong>NIB</strong> : 0220006142214
              </p>
              <p>
                <strong>Surat Keterangan Terdaftar</strong> :
                S-2118KT/WPJ.33/KP.0703/2020
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full md:h-screen h-[60vh] mb-12'>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='md:text-6xl text-4xl font-bold capitalize text-center '>
              struktur Perusahaan
            </h2>
            <span className='w-full h-1 bg-[#325775] rounded-full'></span>
          </div>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          ;
          <div className='md:w-1/2 w-full px-4 h-full pb-4 md:pb-14'>
            {/* Gambar kecil */}
            <Image
              src={'/assets/stuktur.jpeg'}
              alt='structure'
              width={300}
              height={300}
              className='w-full h-full cursor-pointer'
              onClick={() => setIsOpen(true)}
            />

            {/* Modal */}
            {isOpen && (
              <div
                className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999999]'
                onClick={() => setIsOpen(false)}
              >
                <div className='relative max-w-6xl w-full md:h-full h-2/3 flex justify-center items-center px-6 py-6 '>
                  <Image
                    src={'/assets/stuktur.jpeg'}
                    alt='structure full'
                    width={300}
                    height={300}
                    className='w-full h-full  rounded-lg shadow-lg'
                  />
                  <button
                    className='absolute top-4 right-4 bg-white rounded-full p-2 text-black shadow'
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default AboutPage
