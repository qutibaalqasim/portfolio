import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between wrapper'>
      <a href="#">    
          <img src="/navbar/logo.png" alt="" width={"120px"} height={"30px"} />
      </a>
      <div className='2md:hidden'>
        <button onClick={handleToggle} className='w-fit'>
          {isOpen? <img src="/navbar/closeMenu.svg" alt="close menu" width={"20px"} height={"20px"} className='mt-12 ms-20 w-fit' />:           <img src="/navbar/menu.svg" alt="menu toggle" className='mt-12 me-0' /> }
          {isOpen && (
        <ul className='flex flex-col gap-4 absolute bg-black'>
         <li>
          <a href='#home' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Home</a>
        </li>
        <li>
        <a href="#services" 
         onClick={(e) => {
          e.preventDefault();
          document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
        }}
        className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Services</a>
        </li>
        <li>
          <a href='#AboutMe' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#AboutMe').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>AboutMe</a>
        </li>
        <li>
          <a href='#Skills' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Skills</a>
        </li>
        <li>
          <a href='#Portfolio' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#Portfolio').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>PortFolio</a>
        </li>
        <li>
          <a href='#ContactMe'
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#ContactMe').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>ContactMe</a>
        </li>
        </ul>
      )}
        </button>
      </div>
      <ul className='hidden 2md:flex items-center gap-16'>
        <li>
          <a href='#home' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Home</a>
        </li>
        <li>
          <a href="#services"
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Services</a>
        </li>
        <li>
          <a href='#AboutMe' 
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#AboutMe').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>AboutMe</a>
        </li>
        <li>
          <a href='#Skills'
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>Skills</a>
        </li>
        <li>
          <a href='#Portfolio'
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#Portfolio').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>PortFolio</a>
        </li>
        <li>
          <a href='#ContactMe'
           onClick={(e) => {
            e.preventDefault();
            document.querySelector('#ContactMe').scrollIntoView({ behavior: 'smooth' });
          }}
          className='text-navLink font-medium text-xl hover:text-[#FD6F00] duration-200'>ContactMe</a>
        </li>
      </ul>
    </div>
  )
}
