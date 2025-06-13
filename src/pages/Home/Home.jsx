import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
export default function Home() {
  const [active, setActive] = useState('FrontEnd');
  const [click , setClicked] = useState(null);

 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_rqqcb4i', 'template_dxmyvpu', form.current, {
          publicKey: 'Z-kv6z1S2opXduWQX',
        })
        .then(
          (result) => {
            console.log('Email sent successfully!', result.text);
            alert('Email sent successfully!');
          },
          (error) => {
            console.error('Failed to send email:', error.text);
            alert('Failed to send email.');
          }
        );
      }


  return (
    <div>
       <div id='home' className="wrapper flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
  <div className="flex flex-col items-center md:items-start">
    <span className="font-semibold text-base md:text-2xl text-[#707070]">Hi I am</span>
    <h3 className="font-bold text-xl md:text-3xl text-[#959595] mt-[10px]">Qutiba Alqasim</h3>
    <h1 className="font-black text-5xl md:text-7xl bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text mt-6">
      Full-Stack Developer
    </h1>
    <div className='mt-8 flex gap-5 items-center'>
      <a href="https://github.com/qutibaalqasim" className='hover:bg-white rounded-full duration-200'>
        <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} viewBox="0 0 496 512"><path fill="#bec1c1" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>     
      </a>
      <a href="https://www.linkedin.com/in/qalqasim" className='hover:bg-blue-600 rounded duration-200'>
        <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} viewBox="0 0 448 512"><path fill="#bec1c1" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
      </a>
      <a href="#bottom" className='hover:bg-red-600 rounded-full duration-200'>
      <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} viewBox="0 0 512 512"><path fill="#bec1c1" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
      </a>
    </div>
    <div className='flex gap-7 mt-16 bg-[#5757571c] rounded'>
        <div className='p-6 text-center md:text-left'>
          <span className='font-extrabold text-xl md:text-2xl text-[#FD6F00]'>+1</span>
          <p className='font-bold text-base md:text-xl text-[#DFDFDF]'>Experiences</p>
        </div>
        <div className='border'></div>
        <div className='p-6 text-center md:text-left'>
          <span className='font-extrabold text-xl md:text-2xl text-[#FD6F00]'>+4</span>
          <p className='font-bold text-base md:text-xl text-[#DFDFDF]'>Project done</p>
        </div>
    </div>
  </div>
  <div className="cursor-pointer w-fit mt-9 md:mt-0">
    <img src="/Home/home1.png" alt="home img viewer" className="w-100 h-1/2 bg-[#5757571c] rounded-full hover:bg-gradient-to-l from-[#984300] via-[#FD6F00] to-[#CA5900] hover:rounded-full transition-colors duration-500" />
  </div>
</div>

<div id='services' className='wrapper mt-24 md:mt-36'>
    <h2 className='font-bold text-2xl md:text-4xl text-[#FEFEFE] text-center'>Services</h2>
    <p className='font-medium text-base md:text-xl text-[#707070] text-center mt-4'>
      As A Full-Stack Developer, I specialize building scalabel and user-friendly web Applications.
      From creating Front-End interfaces with modern frameworks like (React, Bootstrap, tailwind, etc...),
      to designing Back-End systems using (NodeJs), and databases like (MySQL, MongoDB), I ensure end-to-end solutions that meet your busnisses requirement.
      Whether it's a responsive website, optimizing performance , or integrating API's .
    </p>

    <div className='grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-20 gap-4 md:gap-10'>
  <div className='bg-[#5757571c] rounded-md flex flex-col text-center items-center min-w-0 p-4'>
    <img src="/Home/services/frontEnd.png" alt="Front-End img" className='w-36 h-36 rounded mt-8'/>
    <h3 className='text-[#FD6F00] font-bold text-xl md:text-2xl mt-2 md:mt-4'>Front-End</h3>
    <p className='font-medium text-base md:text-xl text-[#575757] mt-4 md:mt-8 mx-2 md:mx-4 break-words'>
      Building any Front-End website via (HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React)
      based on your needs and suggestions. I can also build it from scratch independently or with a team.
    </p>
  </div>
  <div className='bg-[#5757571c] rounded-md flex flex-col text-center items-center min-w-0 p-4'>
    <img src="/Home/services/backend.jpg" alt="Back-End img" className='w-36 h-36 rounded mt-8'/>
    <h3 className='text-[#FD6F00] font-bold text-xl md:text-2xl mt-2 md:mt-4'>Back-End</h3>
    <p className='font-medium text-base md:text-xl text-[#575757] mt-4 md:mt-8 mx-2 md:mx-4 break-words'>
      Creating APIs from scratch with Node.js, and using (MySQL, MongoDB) databases. Using (Sequelize) ORM for MySQL
      and (Mongoose) ODM for MongoDB. I also work with packages like (jsonwebtoken, bcryptjs, joi, nodemailer, etc.).
    </p>
  </div>
</div>
</div>


<div id='AboutMe' className='wrapper mt-24 md:mt-36'>
  <h2 className='font-bold text-2xl md:text-4xl text-[#FEFEFE] text-center'>AboutMe</h2>
  <p className='font-medium text-base md:text-xl text-[#707070] text-center mt-4'>Full-Stack Developer</p>

  <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-16 md:gap-24 mt-16  md:mt-10'>
    
    <img src="/Home/AboutMe/AboutMe.png" alt="AboutMe img.png" className=' bg-[#5757571c] rounded-full cursor-pointer hover:bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] duration-500'/>
    <p className='font-medium text-base/8 md:text-xl/8 text-[#959595] text-center font-stretch-expanded'>
      My name is Qutiba Ahmad Ismael Abdaljawwad, a 26-year-old Full-Stack Developer with a Bachelor's degree in Computer Science from Al-Quds University, earned in 2024. I am currently enrolled in a comprehensive Full-Stack Development program with Knowledge Academy, running from March 7, 2024, to March 10, 2025. Prior to this, I completed a six-month training program at Dimension Company, where I worked with technologies such as Lua and JavaScript. Additionally, I gained experience working at Reach Company as a call center agent for three months. I am continuously expanding my skills and deepening my knowledge in full-stack development to prepare myself for professional opportunities in the field.

 
    </p>
  </div>
</div>


<div id='Skills' className='wrapper mt-24 md:mt-36'>
<h2 className='font-bold text-2xl md:text-4xl text-[#FEFEFE] text-center'>Skills</h2>
<h4 className='font-bold text-3xl md:text-4xl text-[#959595] mt-2'>USING NOW:</h4>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 md:mt-20 gap-4'>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/html.svg" alt="html logo" />
      <span className='font-bold text-2xl text-[#959595]'>html</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/css.svg" alt="css logo" />
      <span className='font-bold text-2xl text-[#959595]'>Css</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/Js.svg" alt="javaScript logo" />
      <span className='font-bold text-2xl text-[#959595]'>javaScript</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/bootstrap.svg" alt="BootStrap logo" />
      <span className='font-bold text-2xl text-[#959595]'>BootStrap</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/es6.png" alt="Es6 logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>Es6</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/figma.svg" alt="Figma logo" />
      <span className='font-bold text-2xl text-[#959595]'>Figma</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/github.png" alt="GitHub logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>GitHub</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/tailwind.png" alt="Tailwind logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>Tailwind</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/nodejs.svg" alt="NodeJs logo" />
      <span className='font-bold text-2xl text-[#959595]'>NodeJs</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/Mysql.svg" alt="MySql logo" />
      <span className='font-bold text-2xl text-[#959595]'>MySql</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/sequelize.svg" alt="Sequalize logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>Sequalize</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/MongoDb.svg" alt="MongoDB logo" />
      <span className='font-bold text-2xl text-[#959595]'>MongoDB</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/mongoose.png" alt="Mongoose logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>Mongoose</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/java.svg" alt="java logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>java</span>
    </div>
    
</div>

<h4 className='font-bold text-3xl md:text-4xl text-[#959595] mt-2'>Learning:</h4>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 md:mt-20 gap-4'>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/react.svg" alt="React logo" />
      <span className='font-bold text-2xl text-[#959595]'>React</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/redux.svg" alt="Redux logo" className='w-20 h-24' />
      <span className='font-bold text-2xl text-[#959595]'>Redux</span>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <img src="/Home/skils/Ts.svg" alt="TypeScript logo" />
      <span className='font-bold text-2xl text-[#959595]'>TypeScript</span>
    </div>
</div>
</div>

<div id='Portfolio' className='wrapper mt-24 md:mt-36'>
<h2 className='font-bold text-2xl md:text-4xl text-[#FEFEFE] text-center'>Portfolio</h2>
<div className='flex justify-center items-center gap-4 mt-6 md:mt-10'>
  <button 
 onClick={()=>setActive('FrontEnd')} 
  className='py-[10px] md:py-[14px] px-5 md:px-10 font-bold text-sm md:text-base text-white bg-[#5757571c] rounded hover:bg-gradient-to-r from-[#FD6F00] to-[#E46400] transition-all duration-200'>
    Front-End
  </button>

  <button
  onClick={()=>setActive('BackEnd')}
  className='py-[10px] md:py-[14px] px-5 md:px-10 font-bold text-sm md:text-base text-white bg-[#5757571c] rounded hover:bg-gradient-to-r from-[#FD6F00] to-[#E46400] transition-all duration-200'>
    Back-End
  </button>
</div>

{active == 'FrontEnd' &&(
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] md:gap-4 mt-8 md:mt-16 mb-24 md:mb-36'>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/FrontEnd/bootstrap.png" alt="bootstrap project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://qutibaalqasim.github.io/Bootstrap-project/" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>Saloon Beauty</a>
      <button
      onClick={()=> setClicked('bootstrap-project')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/FrontEnd/land.png" alt="landing Page img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://qutibaalqasim.github.io/LandingProject/" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>LandingPage</a>
      <button 
      onClick={()=> setClicked('simpleLanding')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/FrontEnd/tailwind.png" alt="Netflex project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://qutibaalqasim.github.io/NetFlex/" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>Netflex</a>
      <button
      onClick={()=> setClicked('netflex')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/FrontEnd/tailwindLand.png" alt="Land page img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://qutibaalqasim.github.io/LandingPage-Tailwind/" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>LandingPage</a>
      <button
      onClick={()=> setClicked('tailwind-Land')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
</div>

)}




{active == 'BackEnd' && (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] md:gap-4 mt-8 md:mt-16 mb-24 md:mb-36 '>

   
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/BackEnd/sequlizeProject.png" alt="ums project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://github.com/qutibaalqasim/ums" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>UMS</a>
      <button
      onClick={()=> setClicked('ums')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/BackEnd/sequlizeProject.png" alt="sms project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://github.com/qutibaalqasim/SMS" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>SMS</a>
      <button 
      onClick={()=> setClicked('sms')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/BackEnd/mongooseProject.jpg" alt="qShop project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://github.com/qutibaalqasim/QShop_Back" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>QShop</a>
      <button 
      onClick={()=> setClicked('qshop')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  <div className='px-0 md:px-20 hover:px-0 duration-300'>
    <img src="/Home/portfolio/BackEnd/mongooseProject.jpg" alt="3leina project img" className='w-auto h-64 rounded-t' />
    <div className='flex justify-between items-center flex-wrap bg-[#5757571c] rounded-b'>
      <a href="https://github.com/qutibaalqasim/3leina" className='font-bold text-base text-[#C6C6C6] m-4 hover:text-[#FD6F00] duration-200'>3leina</a>
      <button 
      onClick={()=> setClicked('3leina')}
      className='font-bold text-base text-[#959595] m-4 hover:text-[#FD6F00] duration-200'>Categories</button>
    </div>
  </div>
  
</div>
)}




</div>

{click == 'bootstrap-project' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>Bootstrap FronEnd</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>A SaloonBeauty is a Front-End project allows the user to choose what they want and when they need it, 
            it's helpful to save time for customers they havn't time to go to saloons, the worker will be in the location in the time 
             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>html</li>
                <li className='text-slate-300 text-base '>css</li>
                <li className='text-slate-300 text-base '>js</li>
                <li className='text-slate-300 text-base '>bootstrap</li>
              </ul>
             </div>
             <div className='pt-2'>
             <h3 className='font-bold text-white text-3xl'>Design:</h3>
             <p className='text-slate-300 text-base '>it's not responsive as all but it have alot of features and applying for computers only yet</p>
             </div>
          </div>
          
    </div>  
    )}

{click == 'simpleLanding' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>Simple Landing Page</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>
            this landing page is for a courses website that provides alot of courses to the students of the University and let them know the price and time for each course 
             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>html</li>
                <li className='text-slate-300 text-base '>css</li>
              </ul>
             </div>
             <div className='pt-2'>
             <h3 className='font-bold text-white text-3xl'>Design:</h3>
             <p className='text-slate-300 text-base '>it's responsive as all but it still a landing page with just html and css without actions</p>
             </div>
          </div>
          
    </div>  
    )}

{click == 'netflex' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>Netflex</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>
            A Netflex project is a Front-End project hasing alot of features it allows user to watch movies and shows 
            in their favorite locations and time.
            and having a rating on all film with testimonials and more about the movies category and its suitable for all devices ...
             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>html</li>
                <li className='text-slate-300 text-base '>js</li>
                <li className='text-slate-300 text-base '>tailwindCss</li>
              </ul>
             </div>
             <div className='pt-2'>
             <h3 className='font-bold text-white text-3xl'>Design:</h3>
             <p className='text-slate-300 text-base '>it's full responsive and has alot of features it's suitable for all devices</p>
             </div>
          </div>
          
    </div>  
    )}

{click == 'tailwind-Land' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>Tailwind Landing Page</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>
            this landing page for building digital products you can build any kind of digital product 
            and show it to your customers you can also put any tistimonial or rating on any work  
             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>html</li>
                <li className='text-slate-300 text-base '>tailwindCss</li>
              </ul>
             </div>
             <div className='pt-2'>
             <h3 className='font-bold text-white text-3xl'>Design:</h3>
             <p className='text-slate-300 text-base '>it's full responsive but it still landing bage without any functions in it</p>
             </div>
          </div>
          
    </div>  
    )}

{click == 'ums' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>User Management System</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>
           UMS (User Management System) is a back-end training project that provides user registration and login functionality with email confirmation. 
           The system is built using Express.js and incorporates several key packages and technologies, including: 
           1- Joi for data validation
           2- Nodemailer for sending email confirmations
           3- JWT for authentication and authorization
           4- Bcryptjs for password hashing
           5- Multer and Cloudinary for handling and storing user-uploaded images
           
           Registered users can create blog posts with detailed content and update their profile photos. 
           This project was developed as part of my training to enhance my practical skills in building secure and feature-rich backend systems.
             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>Nodejs</li>
                <li className='text-slate-300 text-base '>Sequelize</li>
                <li className='text-slate-300 text-base '>express</li>
                <li className='text-slate-300 text-base '>joi</li>
                <li className='text-slate-300 text-base '>jsonwebtoken</li>
                <li className='text-slate-300 text-base '>bcryptjs</li>
                <li className='text-slate-300 text-base '>multer</li>
                <li className='text-slate-300 text-base '>cloudinary</li>
              </ul>
             </div>
             <div className='pt-2'>
             <a href="https://ums-otog.onrender.com/" className='hover:text-[#FD6F00] duration-200'>View results with online demo</a>
             </div>
          </div>
          
    </div>  
    )}

{click == 'sms' && (
    <div className='fixed top-0  rounded w-full h-screen'>
      
        <button
        onClick={()=>setClicked(null)}
        className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </button>
     
          <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
          <h2 className='font-bold text-white text-6xl pt-2'>Student Management System</h2>
          <p className='font-medium text-base text-slate-300 pt-2'>
                 SMS (Student Management System) is a back-end training project designed to manage and highlight outstanding students within universities. 
                 The system allows authorized users—such as university doctors or employees or students—to register and log in, with email confirmation implemented for added security.
                  The project utilizes Express.js and incorporates several key packages and technologies, including:
                  1- User authentication and authorization using JWT, with secure password handling via bcryptjs
                  2- Data validation using Joi to ensure the integrity of user inputs
                  3- Multer and Cloudinary for handling and storing user-uploaded images, allowing students to showcase their achievements visually
                  4- Nodemailer for sending email confirmations to users upon registration
                  5- Express.js as the core server framework
                  the universities has an admin for each one to manage the students and their data,
                  the students can put a comment or reaction on the posts of the university.

             </p>
             <div className='pt-2'>
              <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
              <ul>
                <li className='text-slate-300 text-base '>Nodejs</li>
                <li className='text-slate-300 text-base '>Sequelize</li>
                <li className='text-slate-300 text-base '>express</li>
                <li className='text-slate-300 text-base '>joi</li>
                <li className='text-slate-300 text-base '>jsonwebtoken</li>
                <li className='text-slate-300 text-base '>bcryptjs</li>
                <li className='text-slate-300 text-base '>multer</li>
                <li className='text-slate-300 text-base '>cloudinary</li>
              </ul>
             </div>
             <div className='pt-2'>
             <a href="https://sms-tz60.onrender.com/" className='hover:text-[#FD6F00] duration-200'>View results with online demo</a>
             </div>
          </div>
          
    </div>  
    )}

{click == 'qshop' && (
<div className='fixed top-0  rounded w-full h-screen'>
  
    <button
    onClick={()=>setClicked(null)}
    className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
    </button>
  
      <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
      <h2 className='font-bold text-white text-6xl pt-2'>QShop</h2>
      <p className='font-medium text-base text-slate-300 pt-2'>
              QShop is a back-end training project designed to manage and facilitate the buying and selling of products of a clothes store.
              The system allows users to register and log in, with email confirmation implemented for added security.
              The project utilizes Express.js and incorporates several key packages and technologies, including:
              1- User authentication and authorization using JWT, with secure password handling via bcryptjs
              2- Data validation using Joi to ensure the integrity of user inputs
              3- Multer and Cloudinary for handling and storing user-uploaded images, allowing users to showcase their products visually
              4- Nodemailer for sending email confirmations to users upon registration
              5- Express.js as the core server framework
              the users could buy products of a clothes store through this platform.
              The system also includes features for managing product listings, processing orders.
              Users can browse products by categories, add them to their cart, and proceed to checkout.
          </p>
          <div className='pt-2'>
          <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
          <ul>
            <li className='text-slate-300 text-base '>Nodejs</li>
            <li className='text-slate-300 text-base '>mongoose</li>
            <li className='text-slate-300 text-base '>express</li>
            <li className='text-slate-300 text-base '>joi</li>
            <li className='text-slate-300 text-base '>jsonwebtoken</li>
            <li className='text-slate-300 text-base '>bcryptjs</li>
            <li className='text-slate-300 text-base '>multer</li>
            <li className='text-slate-300 text-base '>cloudinary</li>
            <li className='text-slate-300 text-base '>nodemailer</li>
            <li className='text-slate-300 text-base '>slugify</li>
            <li className='text-slate-300 text-base '>cors</li>
            <li className='text-slate-300 text-base '>dotenv</li>
          </ul>
          </div>
          <div className='pt-2'>
          <a href="https://qshop-back.onrender.com/" className='hover:text-[#FD6F00] duration-200'>View results with online demo</a>
          </div>
      </div>
      
</div>  
)}

{click == '3leina' && (
<div className='fixed top-0  rounded w-full h-screen'>
  
    <button
    onClick={()=>setClicked(null)}
    className='fixed end-0 p-4 hover:drop-shadow-[0_35px_35px_rgba(#BE5300)]'>
    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#fd6f00" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
    </button>
  
      <div className='z-[999] bg-slate-700 wrapper h-full text-center'>
      <h2 className='font-bold text-white text-6xl pt-2'>3leina Stage</h2>
      <p className='font-medium text-base text-slate-300 pt-2'>
              3leina stage is a back-end project designed to manage the buying and selling of products on the 3leina stage.
              The system allows users to register and log in, with email confirmation implemented for added security every user can be a seller or buyer.
              the stage allows users to create products and manage their listings the stage provides a one to one chat feature that allows the users to communicate directly with each other.
              The project utilizes Express.js and incorporates several key packages and technologies, including:
              1- User authentication and authorization using JWT, with secure password handling via bcryptjs
              2- Data validation using Joi to ensure the integrity of user inputs
              3- Multer and Cloudinary for handling and storing user-uploaded images, allowing users to showcase their products visually
              4- Nodemailer for sending email confirmations to users upon registration
              5- Express.js as the core server framework
              6- Socket.io for real-time communication between users
              7- MongoDB as the database for storing user and product data
              8- Mongoose for object data modeling (ODM) with MongoDB
              the user can create a product and manage it, the user can also chat with other users in real-time.
              after the user create a product he can add it to the cart and buy it, the user can also add a comment on the product and rate it.
              and the user can give a suggestions to the admin of the stage.
              the stage provide a payment system that allows the user to pay for the product using a credit card or cash on delivery.
              the stage also provides a search feature that allows the user to search for products by name or category.
              
          </p>
          <div className='pt-2'>
          <h3 className='font-bold text-white text-3xl'>Tools&Technology:</h3>
          <ul>
            <li className='text-slate-300 text-base '>Nodejs</li>
            <li className='text-slate-300 text-base '>mongoose</li>
            <li className='text-slate-300 text-base '>express</li>
            <li className='text-slate-300 text-base '>joi</li>
            <li className='text-slate-300 text-base '>jsonwebtoken</li>
            <li className='text-slate-300 text-base '>bcryptjs</li>
            <li className='text-slate-300 text-base '>multer</li>
            <li className='text-slate-300 text-base '>cloudinary</li>
            <li className='text-slate-300 text-base '>nodemailer</li>
            <li className='text-slate-300 text-base '>slugify</li>
            <li className='text-slate-300 text-base '>cors</li>
            <li className='text-slate-300 text-base '>dotenv</li>
            <li className='text-slate-300 text-base '>socket.io</li>
            <li className='text-slate-300 text-base '>stripe</li>
          </ul>
          </div>
          <div className='pt-1'>
          <a href="https://threeleina.onrender.com/" className='hover:text-[#FD6F00] duration-200'>View results with online demo</a>
          </div>
      </div>
      
</div>  
)}


  <div id='ContactMe' className="wrapper mb-6">
  <h2 className="font-bold text-2xl md:text-4xl text-[#FEFEFE] text-center mb-2">ContactMe</h2>
  <form ref={form} onSubmit={sendEmail}>
    <div className=" mb-6">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#959595]">name</label>
        <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FD6F00] focus:border-[#FD6F00] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qutiba alqasim" required />
      </div>
    </div>
    <div className='mb-6'>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#959595]">Email address</label>
      <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FD6F00] focus:border-[#FD6F00] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="qalqasim9@gmail.com" required />
    </div> 
    <div className="mb-6">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#959595]">Your message</label>
      <textarea id="message" name='message' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FD6F00] focus:border-[#FD6F00] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." defaultValue={""} />
    </div>
    <button type="submit" className="text-white bg-[#FD6F00] hover:bg-[#984300] focus:ring-4 focus:outline-none focus:ring-[#FD6F00] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
  </form>
</div>



    </div>
  )
}
