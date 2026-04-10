"use client";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";


export default function Home() {
  return (
    <div className="w-full h-full px-4 mt-4">
      {/* 標題層區塊 */}
      <header className="mb-10"> 
        <h1 className="text-[32px] font-extrabold text-[#B1843D]">
          UI  DESIGN ˚‧｡⋆
        </h1>
        <h2 className="mt-3 text-lg font-medium text-black tracking-[0.3em] opacity-70 pointer-events-none leading-relaxed">
          台北有藝事專案設計 — 一站式整合藝文平台
        </h2>
      </header>

      {/* 作品內容層 Grid */}
      <div className="grid grid-cols-12 gap-8 auto-rows-[250px] mt-6">
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

      <div className="grid grid-cols-12 gap-8 auto-rows-[600px] mt-6">
          <div className=" col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/ui/18.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">專案海報設計</div>
                              <div className="text-black font-medium  text-center text-[12px]">整合個人推薦、藝文活動地圖、評價查詢等的一站式藝文平台</div>
                              </div>
        </div>
        {/*  Figma 嵌入格】適合展示互動原型 */}
        <div className="col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                         relative overflow-hidden ">
          <div className="w-full h-full flex items-center justify-center transform transition-transform duration-500">
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://embed.figma.com/proto/MtzviBpFOFc2qHswImCtTg/%E5%8F%A4%E5%94%A7?page-id=661%3A1615&node-id=789-2226&viewport=621%2C337%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=789%3A2226&show-proto-sidebar=1&embed-host=share&show-proto-sidebar=0&hide-footer=1"
              className="w-full h-full border-none transform  origin-center scale-115"
              allowFullScreen
            />
          </div>

          
          {/* 互動提示遮罩：加上 pointer-events-none 以免擋住 Figma 操作 */}
          <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
            <div className="text-black font-black  text-xl text-center">Figma Prototype</div>
            <div className="text-black font-medium  text-center text-[12px]">可直接操作互動原型</div>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YT9PQXTaIy0?si=hsJN-bdI4yhdEW8d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      
        <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
            <div className="text-black font-black  text-xl text-center">專案報告</div>
            <div className="text-black font-medium  text-center text-[12px]">完整專案分析</div>
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