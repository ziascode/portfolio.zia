import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import './assets/style.css';
import About from "./Components/About";
import './App.css';
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import React, {useState} from 'react';


function App() {
  const [alist, setList] = useState([
        
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642713725/metas/portfolio/net2_qpuyqs.jpg",
          title:"Netflix Clone",
          stack:"React | Html | CSS | Rest Api | Netlify ",
          description:"I recreated the front end of Netflix to showcase both my design skills and competency with React. This React/Redux app uses a REST API to gather information from the TMBD API in order to create a fully functional clone of the Netflix website, except instead of Netflix, it is all YouTube videos. The app updates to ensure all the latest movies and shows are displayed on the front page. I hope that you enjoy browsing it as much as I did making it!",
          site:"https://ecstatic-swanson-b8ff54.netlify.app/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643169882/metas/portfolio/n1_zw4odb.jpg"
          
        },
        
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1655079946/metas/portfolio/gsap1_fxk9ec.svg",
          title:"Web Animation - GSAP",
          stack:"GSAP, JavaScript, HTML, CSS",
          description:"An ad banner web animation I built using GSAP. GSAP is a JavaScript animation library from lets you create high-performance animations that work in every major browser.",
          site:"https://gsap-banner-kumgvyvf0-ziascode.vercel.app/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1655080192/metas/portfolio/gsap2_i3urca.jpg"
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1655093987/metas/portfolio/vue_u4skwf.jpg",
          title:"Vue Movies",
          stack:"React | Html | CSS | Rest Api | Netlify ",
          description:"A movie app built with Vue.js utilizing the TMBD open source movie API. The app performs the following functions: display popular movies, search movies by title, and display movies by category.",
          site:"https://wondrous-pastelito-107c2b.netlify.app/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643169882/metas/portfolio/n1_zw4odb.jpg"
          
        },  
        
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642713461/metas/portfolio/m2_toqaso.jpg", 
          title:"Mauthoor",
          stack:"JavaScript | HTML | CSS | Figma",
          description:"Mauthoor Ltd is a talent-agency run by Mohammed Mauthoor. His clientele grew and he decided he needed a more professional way to present his services, so he contacted me for the job. I designed wireframes, put together a simple spec sheet, and began the design process. I developed the selected wireframe into a fully responsive one-page website with a clean modern look. It features several standard sections including about, contact, portfolio and others as well as customized animations using JavaScript to achieve desired effects.",
          site:"https://mauthoor.com/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643163892/metas/m3_v5m5cg.jpg",
          img2:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643161782/metas/m2_z2iacw.jpg",
          img3:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643163892/metas/m3_v5m5cg.jpg",
          img4:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643162935/metas/m4_qj6xzg.jpg"
          
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1654028614/metas/portfolio/mo_358_iieuiz.jpg", 
          title:"Paghman Kabob",
          stack:"React | JavaScript | Wordpress | Custom CSS & HTML | Vercel",
          description:"Paghman Kabob is a family owned restaurant operating in Geulph.  I was commissioned to develop and execute a digital strategy to improve their online sales. As part of this strategy, I developed a modern responsive website geared to drive users to increase traffic, customer engagement, conversions and improve search engine optimization.",
          site:"https://paghmankabob.com/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1654026623/metas/portfolio/paghmon_kfkcbp.jpg",
          img2:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643161782/metas/m2_z2iacw.jpg",
          img3:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643163892/metas/m3_v5m5cg.jpg",
          img4:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643162935/metas/m4_qj6xzg.jpg"
          
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642713460/metas/portfolio/krypton3_bgcpcr.jpg",
          title:"Kyrpton",
          stack:"JavaScript, HTML, CSS, Rest API, Figma",
          description:"Krypton is a cryptocurrency tracking web application. It allows users to input a cryptocurrency and returns data such as current price, market cap, ticker symnol etc.",
          site:"https://atlasvirtual.ca/krypton/krypto.html",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643832923/metas/k1_swdtrh.jpg"
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642805023/metas/portfolio/rihla_mujqog.jpg",
          title:"Al Rihla Tourism",
          stack:"JavaScript, HTML, CSS, Figma",
          description:"I was approached by Al Rihla Tourism, a tourism agency, to create a website that would enable their customers to search for packages, prices, destinations and book directly online. A complete booking and payment module where necessary, was also key. The site was designed using Figma and built with Wordpress. The result is a functional, responsive and visually appealing tourist portal.",
          site:"https://alrihlatourism.com/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643174017/metas/portfolio/r1_ys3gxl.jpg"
        },  
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642713460/metas/portfolio/lux_tfijgl.jpg",
          title:"Tesla Clone",
          stack:"React | HTML | CSS | Netlify",
          description:"Scared of big bad wolves huffing and puffing and blowing your house down? We all get scared at night, but with the new Tesla home page that I recreated using React, you never need to worry again. This component based project makes it so when you're away, you'll come home to a secure website and an invulnerable web server that even has an X-Ray vision mode! This description makes no sense, just like my copyrighting skills - good thing I'm a web developer. If you're a potential clinet, please remember to write your own content!",
          site:"https://61dedd66913183467815ae22--ecstatic-swanson-b8ff54.netlify.app/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643171282/metas/portfolio/t1_wxj10d.jpg"
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642713460/metas/portfolio/tallie_cf7enj.jpg",
          title:"Tallie Dar",
          stack:"JavaScript, HTML, CSS, Figma",
          description:"Tallie Dar's website is a virtual reflection of his ethos. One that showcases him as an animated character and content creator, while featuring all of his ventures, with a few of the projects he has done. Tallie was one of my first clients as a freelance developer. I created this with HTML and pure CSS and used Javascript for the complex animations.",
          site:"https://talliedar.com/",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643172709/metas/portfolio/ta2_ofxull.jpg"
        },
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642720391/metas/portfolio/ar_lkng1g.jpg",
          title:"Augmented Reality App",
          stack:"JavaScript, HTML, CSS, Figma",
          description:"Experience 3D models in the real world by simply pointing your iPhone at something that looks like a room, and boom! it appears right before your eyes. I created this app on a lazy summer evening utilizing Google model-viewer which is a Web-GL component that supports the placing of 3D models in augmented reality. Only available on iOS devices.",
          site:"https://atlasvirtual.ca/app2.html",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643172948/metas/portfolio/a1_tf1d2k.jpg"
        },
  
        {
          img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642805031/metas/portfolio/w2_ql8krf.jpg",
          title:"Weather API",
          stack:"JavaScript, HTML, CSS, Figma",
          description:"N/A",
          img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643833959/metas/portfolio/w1_vbatce.jpg"
        },
        
        // {
        //   img:"https://res.cloudinary.com/dvhcociyf/image/upload/v1642805041/metas/portfolio/speech_vzcyfk.jpg",
        //   title:"Speech To Text",
        //   stack:"JavaScript, HTML, CSS, Figma",
        //   description:"N/A",
        //   img1:"https://res.cloudinary.com/dvhcociyf/image/upload/v1643833555/metas/portfolio/s1_qsgfod.jpg"
        // },
        
    ]);

  return (
    <div >
      <Header/>
      <Banner/>

      <main className="projects pt-10">
        <div className="max-w-7xl mx-auto px-10 sm:px-16 sm:pl-18">
          {/* Projects section */}
            <h1 id="projects" className="text-4xl font-bold text-red-50 py-10 mb-10">Projects</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 space-y-0 sm:space-y-0 sm:-mr-10 sm:ml-5"> 
              {alist.map((item) =>(
                <Projects 
                  key = {item.img}
                  img = {item.img}
                  title = {item.title}
                  stack = {item.stack}
                  description = {item.description}
                  site = {item.site}
                  img1 = {item.img1}
                  img2 = {item.img2}
                  img3 = {item.img3}
                  img4 = {item.img4}
                  
                />
              ))}
            </section>

            
            {/* stack and about */}
            <h1 id="about" className="text-4xl font-bold text-red-50 pt-36 mb-14 md:mt-24">About Me</h1>
            <About/>
            
            <div className="text-indigo-300 text-2xl text-center p-10 sm:p-56">
                <h1>Zia developed a wonderful and user-friendly website for our company in a very short time. We had been struggling with an outdated and difficult-to-use web presence, that had steadily decreased online sales. The new site has greatly improved our traffic and overall sales!</h1><br />
                <h1>- Noora, Al-Rihla Tourism</h1>
            </div>

            <Footer/>
            {/* Clients */}
            {/* <h1 className="text-4xl font-bold text-red-50 py-10 mb-10">Clients</h1> */}
            {/* <Clients/> */}
            {/* Al Rihla, Zahra Labs, Cityscape Charters, Cambridge Driving School, Mauthoor, Tallie Media*/}
            
            <Contact/>
              
            
              
     
      </div>
      </main>
      
                
      <footer className="relative">
        <div className="h-30 mb-10 mt-20  flex justify-center items-center text-indigo-300 text-opacity-50">
          <h1>Designed &amp; developed by Zia Yousaf.</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
