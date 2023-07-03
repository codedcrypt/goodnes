import React from 'react'
import tablet from '../assets/tablet.png'

function headcontent() {
  return (
    <div className=' flex w-screen h-[100%] justify-around align-middle items-center  '>
        <div className=' w-[12%] h-[70%] bg-transparent flex flex-col justify-around items-start'>
        <div>
            <p className=' text-white text-xxs font-semibold'>INSPIRATIONAL TECHNOLOGY</p>
            <h1 className=' font-bold text-xl text-white'>Runs faster</h1>
            <h2 className=' text-large text-white '>Cost less and</h2>
            <h2 className=' text-large text-white '>never breaks</h2>
        </div>
        <div className=' w-full h-[1px] bg-white'></div>
        <h6 className=' font-medium text-white text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus id corrupti odio obcaecati consequuntur perspiciatis. Illo minima soluta odio sunt iusto. Quia, voluptates iure exercitationem ut dolores ea et doloremque. </h6>
        <div className=' w-full flex flex-row gap-6 mt-5'>
            <button  className=' w-16 h-6 bg-[#d36c18] font-medium text-[10px] text-[white] mt-2 '>Get Started</button>
            <button  className=' w-16 h-6 bg-transparent font-medium text-[10px] text-[white] mt-2 border-2 border-grey '>Free trial</button>
        </div>
        </div>
        <img className=' w-[40%] ' src={tablet} alt=""/>
    </div>
  )
}

export default headcontent