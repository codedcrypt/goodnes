import React from 'react'
import Nav from './nav'
import Headcontent from './headcontent'

function header() {
  return (
    <div className=' w-screen h-[70vh] bg-blue-600  '>
        <Nav/>
        <Headcontent/>
    
    </div>
    

  )
}

export default header