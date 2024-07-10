"use client"
import React, { useEffect } from 'react'
import Navbar from '@/Components/Navbar'
import Landingpage from '@/Components/Landingpage'
import Marquee from '@/Components/Marquee'
import About from '@/Components/About'
import Eyes from '@/Components/Eyes'
import Cards from '@/Components/Cards'
import Fcards from '@/Components/Fcards'
import Footer from '@/Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function page() {
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  
  
  return (
    <>
     <div className='w-full bg-zinc-900 text-white m-h-screen'>
       <Navbar/>
    <Landingpage/>
    <Marquee/>
       <About/>
       <Eyes/>
       <Cards/>
       <Fcards/>
       <Footer/>
      
       </div>

  
  </>
  )
}

export default page