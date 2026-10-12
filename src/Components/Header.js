import React, { useState } from 'react';
import { MenuAlt3Icon } from '@heroicons/react/solid'
import '../style.css';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";




function Header() {

  const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    } 

  const activateNav = () => {
    setNav(!nav);
    
    document.querySelector('.navModal').classList.add('active');
  }

  var logoAnimation = () => {
    gsap.set('.circle-one', 5, {rotation:360, animationDelay: 0, ease: "none", repeat:-1});
    gsap.to('.circle-two', {duration: 5, rotation:-360, animationDelay: 1, ease: "none", repeat:-1});
    gsap.to('.inner', {duration: 5, rotation:360, animationDelay: 2, ease: "none", repeat:-1});
  }

  
  return (
    <>
      <div className='relative max-w-7xl mx-auto sm:px-16 sticky top-0 flex items-center justify-end -my-12 px-10 py-6 bg-transparent z-10'>
          <div className="relative logo">
            {/* <h1 className='hidden text-lg font-bold'>Zia</h1> */}
            
           
          </div>
          <MenuAlt3Icon onClick={toggleNav}  className='hover:scale-125 transform duration-150 ease-out cursor-pointer h-10 p-2 bg-indigo-600 rounded-full'/>
      </div>

      {/* nav popup */}
        {nav && (
            <div className="navModal">
                <div onClick={toggleNav} className='navOverlay transition transform hover:-translate-x-[17vw] duration-300'>
                <div className="navModal-content space-y-[8vh] md:space-y-10 flex flex-col text-center justify-center text-white rounded-l-3xl mx-auto w-[70vw] md:w-[20vw] top-[13%] md:top-[25%] h-[80vh] md:h-auto shadow-2xl shadow-zinc-900 font-bold text-5xl md:text-4xl">
                  <a href="#projects"><p className='h-10 hover:text-orange-500 hover:scale-100 transition transform duration-150'>Projects</p></a>
                  <a href="#about"><p className='h-10 hover:text-orange-500 hover:scale-100 transition transform duration-150'>About</p></a>
                  <a href="#contact"><p className='h-10 hover:text-orange-500 hover:scale-100 transition transform duration-150'>Contact</p></a>
                </div>
                </div>
           </div>
   

        )}
    </>
  
  );
}

export default Header;
