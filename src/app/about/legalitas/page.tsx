// import React from 'react'
'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Legalitas = () => {
  const router = useRouter()
  return (
    <main className='w-full h-full'>
      <Header />
      <section className='w-full flex md:h-screen h-full flex-col items-center gap-4 md:mt-24 mt-8 mb-4'>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='md:text-6xl text-4xl font-bold capitalize text-center '>
              Legalitas
            </h2>
            <span className='w-full h-1 bg-[#325775] rounded-full'></span>
          </div>
        </div>
        <div className='w-full md:h-screen h-full px-8 flex md:flex-row flex-col  justify-between items-center'>
          <div className='md:w-1/2 w-full md:h-full  p-4 rounded-2xl overflow-hidden'>
            {/* <div className='relative w-full h-[300px] overflow-hidden rounded-md group'>
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
            </div> */}

            <iframe
              src='/pdf/legalitas.pdf'
              className='w-full h-full'
              title='PDF Viewer'
            />
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
      <section className='w-full h-full flex flex-col gap-4 mt-12 '>
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='md:text-6xl text-4xl font-bold capitalize text-center '>
              Dokumen Legalitas
            </h2>
            <span className='w-full h-1 bg-[#325775] rounded-full'></span>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 px-12 mt-8'>
          <div className='w-full h-[60vh] shadow-md  border-2 border-slate-200 py-4 overflow-y-scroll rounded-xl'>
            <div className='w-full h-full'>
              <Image
                src={'/assets/legalitas/1.jpeg'}
                alt={'legalitas 1'}
                width={300}
                height={600}
                className='w-full h-screen'
              />
            </div>
          </div>
          <div className='w-full h-[60vh] shadow-md  border-2 border-slate-200 py-4 overflow-y-scroll rounded-xl'>
            <div className='w-full h-full'>
              <Image
                src={'/assets/legalitas/2.jpeg'}
                alt={'legalitas 1'}
                width={300}
                height={600}
                className='w-full h-screen'
              />
            </div>
          </div>
          <div className='w-full h-[60vh] shadow-md  border-2 border-slate-200 py-4 overflow-y-scroll rounded-xl'>
            <div className='w-full h-full'>
              <Image
                src={'/assets/legalitas/3.jpeg'}
                alt={'legalitas 1'}
                width={300}
                height={600}
                className='w-full h-screen'
              />
            </div>
          </div>
          <div className='w-full h-[60vh] shadow-md  border-2 border-slate-200 py-4 overflow-y-scroll rounded-xl'>
            <div className='w-full h-full'>
              <Image
                src={'/assets/legalitas/4.jpeg'}
                alt={'legalitas 1'}
                width={300}
                height={600}
                className='w-full h-screen'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-full py-4 flex justify-center items-center'>
        <button
          className='bg-[#325775] text-white py-2 px-4 rounded-full mt-8 font-semibold text-xl cursor-pointer active:scale-90 transition-all'
          onClick={() => router.push('/about')}
        >
          kembali ke about
        </button>
      </section>
      <Footer />
    </main>
  )
}

export default Legalitas
