import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaClock } from 'react-icons/fa'





const ContactPage = () => {
  return (
    <main className='w-full h-full'>
      <Header />
      <section className='w-full h-full mt-24 flex flex-col items-center gap-4'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='md:text-5xl text-4xl font-bold capitalize text-center '>
            Contact Us
          </h2>
          <span className='w-full h-1 bg-[#325775] rounded-full'></span>
        </div>
        <p className='text-lg my-4 px-8 text-center md:text-start'>
          Thank you for visiting our website. Let me know if you have something
          to say
        </p>
        <div className='w-full h-full justify-between items-center flex md:flex-row flex-col-reverse md:gap-0 gap-6 pb-4  px-8'>
          <div className='md:w-1/2 w-full h-full md:p-4  '>
            <div className=' w-full h-full bg-[#f0f0f0]  rounded-xl p-8'>
              <h2 className='text-3xl font-bold'>Get In Touch With Us</h2>
              <form
                action='https://formsubmit.co/daffahafizhfirdaus07@gmail.com'
                method='POST'
              >
                <div className='flex flex-col gap-6  mt-8'>
                  <div className=' grid grid-cols-2 gap-6 '>
                    <div className='w-full h-14 bg-white rounded-md px-4 py-2 border border-transparent hover:border-[#325775] transition-all'>
                      <input
                        required
                        name='fullname'
                        type='text'
                        placeholder='input your fullname'
                        className='w-full h-full outline-none placeholder:font-semibold'
                      />
                    </div>

                    <div className='w-full h-14 bg-white rounded-md px-4 py-2 border border-transparent hover:border-[#325775] transition-all'>
                      <input
                        required
                        name='email'
                        type='email'
                        placeholder='input your email'
                        className='w-full h-full outline-none placeholder:font-semibold'
                      />
                    </div>
                  </div>

                  <div className='w-full h-14 bg-white rounded-md px-4 py-2 border border-transparent hover:border-[#325775] transition-all'>
                    <input
                      required
                      name='subject'
                      type='text'
                      placeholder='Subject'
                      className='w-full h-full outline-none placeholder:font-semibold'
                    />
                  </div>
                  <div className='w-full h-46 rounded-md bg-white p-4'>
                    <textarea
                      required
                      name='message'
                      id='Message'
                      title='Message'
                      placeholder='Submit Your Message Request'
                      className='w-full h-full'
                    ></textarea>
                  </div>
                  <div className='w-full flex justify-center items-center'>
                    <button
                      type='submit'
                      className='w-1/2 h-12 rounded-xl text-white capitalize font-semibold flex justify-center items-center bg-[#181818]'
                    >
                      send Message
                    </button>
                  </div>
                  <input
                    name='_formsubmit_id'
                    type='text'
                    style={{ display: 'none' }}
                    title='anti_spam'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='md:w-1/2 w-full h-[80vh] md:p-12'>
            <div className='w-full h-full flex flex-col gap-4'>
              <h2 className='text-4xl font-bold md:text-start text-center'>Contact Details</h2>
              <p className=' text-justify'>{`We're always available to answer your questions, discuss potential collaborations, or provide more information about our services. Feel free to reach out to us using the contact form or details below.`}</p>
              <div className='grid grid-cols-1 gap-4 w-full h-full mt-4'>
                <div className='w-full h-[74px] border border-[#f0f0f0] rounded-xl py-2 px-3 flex gap-4'>
                  <div className='w-[54px] h-full bg-[#181818] rounded-xl flex justify-center items-center text-white'>
                    <FaMapMarkerAlt size={20}/>
                  </div>
                  <div className='flex flex-col  justify-center'>
                    <h3 className='text-xl font-medium'>Address</h3>
                    <p className='text-sm text-ellipsis overflow-hidden text-nowrap w-[200px]'>Cicadas, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16964</p>
                  </div>
                </div>
                <div className='w-full h-[74px] border border-[#f0f0f0] rounded-xl py-2 px-3 flex gap-4'>
                  <div className='w-[54px] h-full bg-[#181818] rounded-xl flex justify-center items-center text-white'>
                    <FaPhoneAlt size={20}/>
                  </div>
                  <div className='flex flex-col  justify-center'>
                    <h3 className='text-xl font-medium'>Mobile</h3>
                    <p className='text-sm'>02186860906</p>
                  </div>
                </div>
                <div className='w-full h-[74px] border border-[#f0f0f0] rounded-xl py-2 px-3 flex gap-4'>
                  <div className='w-[54px] h-full bg-[#181818] rounded-xl flex justify-center items-center text-white'>
                    <MdEmail size={20}/>
                  </div>
                  <div className='flex flex-col  justify-center'>
                    <h3 className='text-xl font-medium'>Email</h3>
                    <p className='text-sm'>namuratehniksejahtera@gmail.com</p>
                  </div>
                </div>
                <div className='w-full h-[74px] border border-[#f0f0f0] rounded-xl py-2 px-3 flex gap-4'>
                  <div className='w-[54px] h-full bg-[#181818] rounded-xl flex justify-center items-center text-white'>
                    <FaClock size={20}/>
                  </div>
                  <div className='flex flex-col  justify-center'>
                    <h3 className='text-xl font-medium'>Availability</h3>
                    <p className='text-sm'>Daily 7:30 AM - 3:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ContactPage
