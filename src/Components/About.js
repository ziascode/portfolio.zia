import React from 'react';
import { MailIcon } from '@heroicons/react/solid'

function About() {
  return (
    <div className='h-auto space-y-10 font-semibold text-md text-red-100 mb-32 sm:mb-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 pb-10'>
            <div className='px-6 md:pr-10 md:pb-10'>
                <p>I'm a front-end web developer with an eye for design. I specialize in creating lightning fast responsive web applications and websites with fluid UX/UI built to perform on all devices.</p> 
                <br /><p>Currently I'm exploring the world of VR developement and building user experiences in 3D virtual environments using Unity, Three.js, and React360. Shoot me an email if you'd like to work with me or get to know more about what I offer.</p>
                <div className='mt-8 space-x-1'>
                <a href="mailto:ZIAYOUSAF94@GMAIL.COM"><button className='border rounded-lg w-28 py-1 border-teal-700 border-1 hover:border-teal-300 bg-indigo-600 bg-opacity-5'>Email</button></a>
                    <a href="https://www.linkedin.com/in/zia-y/" target="_blank"><button className='border rounded-lg w-28 py-1 border-teal-700 border-1 hover:border-teal-300 bg-indigo-600 bg-opacity-5'>LinkedIn</button></a>
                    <a href=""><button className='border rounded-lg w-28 py-1 border-teal-700 border-1 hover:border-teal-300 bg-indigo-600 bg-opacity-5'>Resume</button></a>
                </div>
            </div>
            <img className='hidden md:inline-block inline-block -mt-20' src="https://res.cloudinary.com/dvhcociyf/image/upload/v1642798343/metas/portfolio/vr7_oeesib.png" alt="" />
        </div>
        <div>
            <h1 className='text-2xl'>Stack</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5 -mx-2 text-2xl sm:text-base ">
                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642725177/metas/portfolio/4373213_js_logo_logos_icon_a6duur.svg' className="object-contain rounded-xl h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div>
                        <h2>JavaScript</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642724867/metas/portfolio/react_hmzfck.svg' className="object-contain rounded-lg h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>React</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642727086/metas/portfolio/tailwindcss-mark.79614a5f61617ba49a0891494521226b_eawmwd.svg' className="object-contain rounded-lg h-16 my-2 w-16 ml-2 "/>
                    </div>

                    {/* text section of small card*/}
                    <div>
                        <h2>Tailwind CSS</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642727537/metas/portfolio/html5_srxe7s.svg' className="object-contain rounded-lg h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>HTML</h2>
                    </div>
                </div>
                
            </div>

            <h1 className='text-2xl'>Tools</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5 text-2xl sm:text-base -mx-2">
            

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642729954/metas/portfolio/netlify-icon_p6mzqv.svg' className="object-contain rounded-lg h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>Netlify</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642729950/metas/portfolio/figma_zxn2ik.svg' className="object-contain rounded-xl h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>Figma</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1642729963/metas/portfolio/unity_fen0mo.svg' className="object-contain rounded-lg h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>Unity</h2>
                    </div>
                </div>

                <div className="flex items-center m-2 mt-5 space-x-0 rounded-xl hover:bg-indigo-700 hover:text-black hover:scale-[100%] transition transform duration-200 ease-out bg-indigo-900">
                    {/* img section of small card*/}
                    <div className="relative h-20 w-1/2 pl-5 my-2">
                        <img src='https://res.cloudinary.com/dvhcociyf/image/upload/v1643252714/metas/portfolio/wordpress_hqha1f.svg' className="object-contain rounded-lg h-20 "/>
                    </div>

                    {/* text section of small card*/}
                    <div >
                        <h2>WordPress</h2>
                    </div>
                </div>


            </div>
            
        </div>
        
    </div>
  );
}

export default About;
