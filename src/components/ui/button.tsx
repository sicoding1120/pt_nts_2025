
import React from 'react'

const Button = ({ children }: {children: React.ReactNode}) => {
  return (
    <button className=' w-1/2 mt-6 px-6 py-2 bg-[#325775]  font-semibold text-white rounded-lg hover:bg-yellow-600 transition-colors'>
      {children}
  </button>
  )
}

export default Button