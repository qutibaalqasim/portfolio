import React from 'react'

export default function Home() {
  return (
    <div>
       <div className="wrapper flex justify-between items-center">
        <div className=" flex-col items-center">
          <span className="font-semibold text-base md:text-2xl text-[#707070]">Hi I am</span>
          <h3 className="font-bold text-xl md:text-3xl text-[#959595] mt-[10px]">Qutiba Alqasim</h3>
          <h1 className="font-black text-5xl md:text-7xl bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text mt-6">
            Full-Stack Developer
          </h1>
        </div>
        <div className="cursor-pointer">
            <img src="/Home/homeImg.png" alt="home img viewer" className="w-1/2 h-1/2" />
        </div>
       </div>
    </div>
  )
}
