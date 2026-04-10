"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);

  // let projectdata={
  //   "1":{
  //     "name":"作品1",
  //     "imageUrl":"/head.png"
  //   },

  //   "2":{
  //     "name":"作品2",
  //     "imageUrl":"/head.png"
  //   },

  // };
  // JSON

  const myStickers = [
    "/stickers/1.png",
    "/stickers/2.png",
    "/stickers/3.png",
    "/stickers/4.png",
    "/stickers/5.png",
    "/stickers/6.png",
    "/stickers/7.png",
    "/stickers/8.png",
    "/stickers/9.png",
    "/stickers/10.png",
    "/stickers/11.png",
    "/stickers/12.png",
    "/stickers/13.png",
    "/stickers/14.png",
    "/stickers/15.png",
    "/stickers/16.png",
    "/stickers/17.png",
    "/stickers/18.png",
    "/stickers/19.png",
    "/stickers/20.png",
    "/stickers/21.png",
    "/stickers/22.png",
    "/stickers/23.png",
    "/stickers/24.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % myStickers.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="w-full h-full px-4 mt-4">
      {/* <div className="text-[32px] font-extrabold text-[#B1843D]">VISUAL DESIGN</div>
      <h2 className="mt-3 text-lg md:text-m font-medium text-black tracking-[0.3em] opacity-70 pointer-events-none leading-relaxed">
     一些累積的設計作品
      </h2> */}
      <header className="mb-10"> {/* 💡 用 mb-10 直接把底下的內容往下推 */}
        <h1 className="text-[32px] font-extrabold text-[#B1843D]">
          VISUAL DESIGN˚‧｡⋆
        </h1>
        <h2 className="mt-3 text-lg font-medium text-black tracking-[0.3em] opacity-70 pointer-events-none leading-relaxed">
          一些日常設計創作作品
        </h2>
      </header>

      {/* <div className="grid grid-cols-12 gap-8 auto-rows-[600px] mt-6">
      <div className=" col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/head.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px] flex justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition font-black">作品一</div>
        </div>
        <div className=" col-span-6 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/head.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px] flex justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition font-black">作品一</div>
        </div>

      </div> */}

      
      <div className="grid grid-cols-12 gap-8 auto-rows-[300px] mt-6">
        {/* 輪播 */}
        
      <div className=" col-span-5 group relative overflow-hidden rounded-2xl bg-[#F9F2DC] 
                        flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer
        ">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={myStickers[index]}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5 }}
              className="img w-120 h-120 object-contain  "
              alt="My Sticker"
            />
          </AnimatePresence>


            <div className=" rounded-b-2xl bg-white/30
                             w-full h-[90px] flex flex-col justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-center ">
                              <div className="text-black font-black  text-xl text-center">貼圖繪製</div>
                              <div className="text-black font-medium  text-center text-[12px]">擔任第十屆政大藝術季視設部部員</div>
                        </div>
        </div>

        <div className=" col-span-7 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                         flex  items-center justify-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/stickers/0.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30 
                             w-full h-[90px]   backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition font-black text-xl">
                              <div className="text-black font-black  text-xl text-center">貼圖繪製</div>
                              <div className="text-black font-medium  text-center text-[12px]">第十屆政大藝術季</div>
                              </div>
        </div>
{/* 第二行 */}
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/13.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">日常➊</div>
                              <div className="text-black font-medium  text-center text-[12px]">小日記& ootd</div></div>
        </div>

        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/12.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm  flex flex-col justify-center
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">日常➋</div>
                              <div className="text-black font-medium  text-center text-[12px]">小日記& ootd</div>
                              </div>
        </div>
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/11.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm  flex flex-col justify-center
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">日常➌</div>
                              <div className="text-black font-medium  text-center text-[12px]">小日記& ootd</div>
                              </div>
        </div>

        {/* 第三行 */}
        <div className=" col-span-3 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/16.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  flex flex-col justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">2024回顧</div>
                              <div className="text-black font-medium  text-center text-[12px]">每個月的回憶紀錄</div></div>
        </div>
        <div className=" col-span-3 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/17.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  flex flex-col justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl ">
                              <div className="text-black font-black  text-xl text-center">吃啥</div>
                              <div className="text-black font-medium  text-center text-[12px]">某陣子ㄉ吃吃加日記</div></div>
        </div>
        <div className=" col-span-3 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/15.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  flex flex-col justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">卡片設計➊</div>
                              <div className="text-black font-medium  text-center text-[12px]"></div></div>
        </div>
        <div className=" col-span-3 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/14.jpg)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  flex flex-col justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">卡片設計➋</div>
                              <div className="text-black font-medium  text-center text-[12px]"></div></div>
        </div>





        {/* 第四行 */}
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/888.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">海報設計</div>
                              <div className="text-black font-medium  text-center text-[12px]">高中演講活動海報</div></div>
        </div>
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/5555.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">海報設計電繪草稿</div>
                              <div className="text-black font-medium  text-center text-[12px]">營隊班級海報</div></div>
        </div>
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/666.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">海報設計手繪</div>
                              <div className="text-black font-medium  text-center text-[12px]">營隊班級海報</div></div>
        </div>




        {/* 地武行 */}
        <div className=" col-span-12 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/999.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">高中活動主視覺帆布設計</div>
                              <div className="text-black font-medium  text-center text-[12px]">擔任彰化女中班聯會美宣</div></div>
        </div>





        {/* 第六行 */}
        <div className=" col-span-12 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/1000.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">主視覺設計備案</div>
                              <div className="text-black font-medium  text-center text-[12px]">未採用嘿嘿</div></div>
        </div>

        {/* <div className=" col-span-8 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/777.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">票券設計</div>
                              <div className="text-black font-medium  text-center text-[12px]">高中時活動票券設計</div></div>
        </div>
        
        <div className=" col-span-4 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/visual/13.jpg)] bg-center bg-cover relative overflow-hidden

        ">
            <div className="text-black rounded-b-2xl bg-white/30
                             w-full h-[90px]  backdrop-blur-sm 
                             items-center absolute bottom-0 left-0   flex flex-col justify-center
                             opacity-0 group-hover:opacity-100 transition text-xl">
                              <div className="text-black font-black  text-xl text-center">日常➊</div>
                              <div className="text-black font-medium  text-center text-[12px]">小日記& ootd</div></div>
        </div>


 */}



        {/* 第七行 */}
        {/* <div className=" col-span-7 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/head.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-white rounded-b-2xl bg-white/30 
                             w-full h-[90px] flex justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition text-xl">作品一</div>
        </div> */}
 {/* <div className="col-span-7 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div> */}
        {/* 範本 */}
        {/* <div className=" col-span-5 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8  rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/head.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-white rounded-b-2xl bg-white/30
                             w-full h-[90px] flex justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition">作品一</div>
        </div> */}



       
        <div className="col-span-6 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-6  bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-4 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer "></div>
        <div className="col-span-4 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-4  bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
      </div>
  </div>


  );
}

