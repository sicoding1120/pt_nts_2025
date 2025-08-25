import Footer from '@/components/footer'
import Header from '@/components/header'
import Button from '@/components/ui/button'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Home () {
  const logos = [
    '/assets/costumer/1.jpg',
    '/assets/costumer/2.png',
    '/assets/costumer/3.png',
    '/assets/costumer/4.png',
    '/assets/costumer/5.jpg',
    '/assets/costumer/6.jpg',
    '/assets/costumer/7.png',
    '/assets/costumer/8.jpg',
    '/assets/costumer/9.png',
    '/assets/costumer/10.png',
    '/assets/costumer/11.png',
    '/assets/costumer/12.png',
    '/assets/costumer/13.png',
    '/assets/costumer/14.png'
  ]

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

  return (
    <main className='w-full h-full'>
      <Header /><Header />
      <section className='w-full h-screen flex flex-col-reverse md:flex-row md:mt-0 mt-20 '>
        <div className='md:w-1/2 w-full  md:h-full h-2/3  py-6 px-8 flex flex-col gap-4 justify-center'>
          <h1 className='md:text-8xl text-4xl font-bold text-[#181818] mb-4'>
            Welcome to Our Company{' '}
            <span className='text-[#325775]'>Profile 2025</span>
          </h1>
          <p className='text-xl w-3/4 text-[#181818]'>
            Manufacturing Company With Excellent Service and Meeting Customer
            Needs and Satisfaction
          </p>
          <Button>Next Page</Button>
        </div>
        <div className='md:w-1/2 w-full md:h-full h-1/3 bg-hero rounded-l-xl'></div>
      </section>
      <section className='w-full md:h-screen h-full flex flex-col-reverse md:flex-row'>
        <div className='md:w-1/2 w-full md:h-full h-[300px] bg-about rounded-r-xl'></div>
        <div className='md:w-1/2 w-full md:h-full h-2/3 py-14 flex flex-col items-center gap-6 px-8'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-6xl font-bold capitalize text-center '>
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
      <section className='w-full h-[40vh] flex flex-col items-center py-16 gap-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='text-5xl font-bold capitalize text-center '>
            Our Costumer
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-3/4 py-6'>
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {logos.map((src, idx) => (
              <Image
                width={250}
                height={250}
                key={idx}
                src={src}
                alt={`logo-${idx}`}
                className='h-16 mx-6 object-contain scale-110'
              />
            ))}
          </Marquee>
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
      <section className='w-full h-full flex flex-col items-center gap-8 mt-6 px-8 pb-6'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='text-5xl font-bold capitalize text-center '>
            Address
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <div className='w-full h-full flex flex-col items-center gap-4 text-center'>
          <p>Cicadas, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16964</p>
          <div className='w-full h-[50vh]'>
            <iframe
              name='address'
              title='address'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7929.50888698397!2d106.932644!3d-6.425587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699523ac413399%3A0x35cb2ecf76ca2032!2sPT.Namura%20Technic%20Sejahtera%20Plant%201!5e0!3m2!1sid!2sid!4v1751884146033!5m2!1sid!2sid'
              width='600'
              height='450'
              loading='lazy'
              className='w-full h-full'
            ></iframe>
          </div>
        </div>
      </section>
      <Footer/>
    </main> 
  )
}
