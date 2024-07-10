import React from 'react'

function About() {
  return (
    <>
    <div className='w-full  p-20 text-black bg-[#CDEA68] rounded-tr-[1.5vw] rounded-tl-[1.5vw]'>
       <div className='text-[4vw] font-[Neue_Montreal] leading-[4vw] tracking-tight' >
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
       </div>
        <div className='border-t-2 pt-5 flex gap-5 border-[#99AD53] mt-16 '>
          <div className='w-1/2 '>
            <h1 className='text-[3vw] font-medium'>Our Approach :</h1>
            <button className='text-white uppercase flex  gap-6 items-center py-7 px-7 bg-black rounded-full mt-5 w-[12vw] h-[3vw]'>Read More

            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-1/2  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover h-[70vh] rounded-3xl' >
          </div>

        </div>
    </div>
    </>
  )
}

export default About