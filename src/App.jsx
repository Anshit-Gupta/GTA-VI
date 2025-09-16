 import React from 'react';
import {useGSAP} from '@gsap/react';
import gsap from "gsap";   
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'



const App = () => {
   const [showContent, setShowContent] = useState(false);

  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.to(".vi-mask-group",
      {
        rotate:10,
        duration:2,
        ease:"power4.inOut",
        transformOrigin:"50% 50%"
      }
    )

    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>=.9)
        {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })

  })

  useGSAP(()=>{
     
    if(!showContent) return;

    // Custom cursor implementation
    const cursor = document.querySelector(".cursor");
    
    document.addEventListener("mousemove", function(e){
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "back.out"
      });
    });

    const main =document.querySelector(".main")
    main?.addEventListener("mousemove",function(e){
      const xmove=(e.clientX/window.innerWidth - 0.5 ) *100;
      gsap.to(".text",{
        x:`${xmove*2}px`,
        duration: 0.5,
         ease: "power3.out"
      })
      gsap.to(".sky",{
        x: xmove,
      })
      gsap.to(".background",{
        x: xmove*1.5,
      })
    })
  },[showContent])
  return (
    <>
    {/* Custom Cursor */}
    <div className="cursor fixed w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"></div>
    
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#100]'>
      <svg viewBox="0 0 800 600" preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id='vimask'>
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text 
                x="50%" 
                y="50%" 
                fontSize="250" 
                textAnchor="middle" 
                fill="white" 
                dominantBaseline="middle" 
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>

        <image
          href="/bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio='xMidYMid slice'
          mask='url(#vimask)'
        />
      </svg>
    </div>

    {showContent && (
    <div className=' main w-full    '>
     <div className='ladning overflow-hidden w-full h-screen bg-black '>
       <div className='navbar  text-white  w-auto absolute top-1.5 left-5 z-[10] py-10 px-10  '>
        <div className='logo'>
          <div className='lines ml-10'>
            <h3 className='text-4xl text-shadow- pl-5 '>Rockstar</h3>
          </div>
        </div>
       </div>
       
       <div className='imagesdiv overflow-hidden relative w-full h-screen '>
          <img className ="sky scale-[1.2] absolute top-0 left-0 w-full h-screen  " src="./sky.png " />
          <img  className=" background scale-[1.1] absolute top-0 left-0 w-full h-screen object" src="./bg.png"  />
            <div className='text text-white absolute top-10 left-5/12 -translate-x-1/2 '>
              <h1 className='text-9xl leading-none'>grand</h1>
              <h1 className='text-9xl leading-none'>theft</h1>
              <h1 className='text-9xl leading-none'>auto_</h1>
            </div>
          <img className="absolute -bottom-[55%] left-1/4 -traslate-x-1/2 scale-[0.85] girlbg" src="./girlbg.png" />
       </div>
      
       <div className='btmbar text-white w-full absolute z-[10]  h-[100px] left-0 bottom-0 bg-gradient-to-t from-black to-transparent'>
        <div className='flex gap-4 items-center '>
          {/* <i className="ri-arrow-down-line text-3xl"></i>
          <h3 className="font-[Helvatic_Now_Display] text-3xl">Scroll Down</h3> */}
        </div> 
        <img className="h-[55px] absolute bottom-3 left-1/2 -translate-x-1/2 " src="./ps5.png"  />
       </div>                      
      </div>

     <div className='w-full h-screen flex justify-center items-center  px-10 bg-black'>
      <div className='cntr flex w-full h-[60%] '>

        <div className='left relative w-1/2 h-full'>
        <img className='absolute top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./imag.png"  />
        </div>
        <div className='right absolute left-200 '>
        <h1 className='text-white text-8xl'>Still Running,</h1>
        <h1 className='text-white text-8xl py-10'>Not Hunting ?</h1>
         <a href='https://www.rockstargames.com/VI' target='_blank'>
        <button className='bg-yellow-400 text-5xl  !px-4 !py-3 !mt-11  border-none  text-black mt-10 '>Download Now</button>
         </a>
        
        </div>

      </div>
      
     </div>
    </div>
    )}
    </>
  );
};

export default App;
