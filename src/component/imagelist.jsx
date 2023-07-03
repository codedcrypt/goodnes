import React from 'react'
import fedex from '../assets/image 25.png'
import google from '../assets/google-1-removebg-preview 1.png'
import ola from '../assets/image 27.png'
import micro from '../assets/new-Microsoft-logo-removebg-preview 1.png'

function imagelist() {
  return (
    <div className=' w-full h-20 flex flex-col bg-slate-400'>
        <div className=''>
            <img src={fedex} alt=""/>
            <img src={google} alt=""/>
            <img src={ola} alt=""/>
            <img src={micro} alt=""/>

        </div>
        <div></div>
    </div>
  )
}

export default imagelist