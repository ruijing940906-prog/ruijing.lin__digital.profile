"use client";
import { motion } from "framer-motion";
import { MdOutlineWeb } from "react-icons/md";
import { useState, useEffect } from "react";
import SplitText from "@/components/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


export default function Home() {
  return (
    <div className="w-full h-full px-4 mt-4">
      
      {/* 💡 標題與圖示平行區塊 */}
      <div className="flex items-center gap-6 mb-2">
        
        {/* 3D MOTION 標題 */}
        <SplitText
          text="3D MOTION ˚‧｡⋆"
          className="text-[32px] font-extrabold text-[#B1843D]"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left" // 💡 改為靠左對齊
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* 💡 跳轉圖示與懸停文字 */}
        <a 
          href="https://sites.google.com/view/113102026/home" 
          target="_blank" 
          className="group relative flex items-center"
        >
          {/* 圓形圖示按鈕 */}
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#FFFEEE] shadow-sm transition-all duration-300 group-hover:bg-[#FFE89E] group-hover:scale-110 active:scale-90 cursor-pointer">
            <MdOutlineWeb size={28} className="text-[#B1843D] transition-colors group-hover:text-white" />
          </div>

          {/* 💡 懸停顯示的提示文字 */}
          <span className="absolute left-16 whitespace-nowrap bg-[#B1843D] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none shadow-lg">
            點擊跳轉至課程個人作品集網站
            {/* 小箭頭裝飾 */}
            <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#B1843D] rotate-45"></div>
          </span>
        </a>
      </div>

      {/* 副標題 */}
      <header className="mb-10">
        <h2 className="text-lg font-medium text-black tracking-[0.3em] opacity-70 pointer-events-none leading-relaxed">
          正在學blender~~
        </h2>
      </header>





      {/* 作品內容層 Grid */}
      <div className="grid grid-cols-12 gap-8 auto-rows-[250px] mt-6">
      
{/* 
      待處理 問agent */}
      {/* <div className="sketchfab-embed-wrapper"> <iframe title="NewHW04_113102026" frameBorder="0" allowFullScreen mozallowFullScreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/06e5ac65b51c423fb58b88401bd271cf/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/newhw04-113102026-06e5ac65b51c423fb58b88401bd271cf?utm_medium=embed&utm_campaign=share-popup&utm_content=06e5ac65b51c423fb58b88401bd271cf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> NewHW04_113102026 </a> by <a href="https://sketchfab.com/ruijing.lin_?utm_medium=embed&utm_campaign=share-popup&utm_content=06e5ac65b51c423fb58b88401bd271cf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ruijing.lin_ </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=06e5ac65b51c423fb58b88401bd271cf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> */}




      <div className=" col-span-12 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ui/222.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">台北有藝事</div>
                              <div className="text-black font-medium  text-center text-[12px]">整合個人推薦、藝文活動地圖、評價查詢等的一站式藝文平台</div>
                              </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 auto-rows-[250px] mt-6">
    
          <div className=" col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ddd/new.png)] bg-center bg-cover relative overflow-hidden
                          ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">作業紀錄</div>
                              <div className="text-black font-medium  text-center text-[12px]">HW02雄鷹角色Skin設計</div>
                              </div>
           </div>

          <div className=" col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ddd/new2.png)] bg-center bg-cover relative overflow-hidden
                          ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">作業紀錄</div>
                              <div className="text-black font-medium  text-center text-[12px]">HW03雄鷹角色細節與Round Table Animation </div>
                              </div>
       


       
        
        </div>
        
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ddd/good0.jpg)] bg-center bg-cover relative overflow-hidden
                          ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">3D列印過程紀錄</div>
                              <div className="text-black font-medium  text-center text-[12px]">拆支架好難拆喔</div>
                              </div>
           </div>
           <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ddd/good.jpg)] bg-center bg-cover relative overflow-hidden
                          ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">3D列印過程紀錄</div>
                              <div className="text-black font-medium  text-center text-[12px]">成品正視圖</div>
                              </div>
           </div>
           <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ddd/good2.jpg)] bg-center bg-cover relative overflow-hidden
                          ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">3D列印過程紀錄</div>
                              <div className="text-black font-medium  text-center text-[12px]">和組員的成品合照</div>
                              </div>
           </div>


          
          
       
    </div>

    <div className="grid grid-cols-12 gap-8 auto-rows-[300px] mt-6">
    <div className=" col-span-2 group  transform translate-z-0 isolation-isolate z-0 bg-[#FFFEEE] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                         bg-center bg-cover relative overflow-hidden

        ">
            
        </div>
    <div className="col-span-8 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                         relative overflow-hidden ">
          <div className="w-full h-full flex items-center justify-center transform transition-transform duration-500">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ksvlmWOSNec?si=Pp227LoQOW4Q2bCo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <iframe width="560" height="315" src="https://youtu.be/ksvlmWOSNec?si=KR6o651rCo_-c-cc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      
        <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
            <div className="text-black font-black  text-xl text-center">作業紀錄</div>
            <div className="text-black font-medium  text-center text-[12px]">
            雄鷹角色細節與Round Table Animation_HW03</div>
          </div>
      
      
      
       </div>
    
    </div>
  
    </div>
    <div className="h-32 w-full opacity-0 pointer-events-none">
        Spacer
      </div>

    </div>
  );
}
