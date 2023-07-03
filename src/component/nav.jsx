import React from 'react'

function nav() {
  return (
    <div className=' text-white '>
      <div className=' w-full h-15 flex flex-row justify-around items-center '>
        <h1 className=' font-extrabold text-xl '>SELLZEE</h1>
        <ul className=' flex flex-row gap-5 text-sm font-medium'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonial</li>
          <li>Pricing</li>
        </ul>
        <button className=' w-32 h-8 bg-[#d36c18] rounded-[5px] font-medium text-xs text-[white] mt-2 '> Get Started</button>
      </div>
    </div>
  )
}

export default nav