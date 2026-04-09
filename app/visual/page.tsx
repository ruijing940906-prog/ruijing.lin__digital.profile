import Image from "next/image";
import Link from "next/link";

export default function Home() {

  let projectdata={
    "1":{
      "name":"作品1",
      "imageUrl":"/head.png"
    },

    "2":{
      "name":"作品2",
      "imageUrl":"/head.png"
    },

  };
  JSON



  return (
    <div className="w-full h-full px-4 mt-2 ">
      <div className="text-[32px] font-extrabold text-[#B1843D]">VISUAL DESIGN</div>
      <h2 className="mt-3 text-lg md:text-m font-medium text-black tracking-[0.3em] opacity-70 pointer-events-none leading-relaxed">
     一些累積的設計作品
      </h2>
      <div className="grid grid-cols-12 gap-8 auto-rows-[300px]">

        <div className=" col-span-5 group  transform translate-z-0 isolation-isolate z-0 bg-[#F9F2DC] left-0 py-8 mt-6 rounded-2xl text-center w-full h-full 
                        font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer
                        bg-[url(/head.png)] bg-center bg-cover relative overflow-hidden
        ">
            <div className="text-white rounded-b-2xl bg-white/15 
                             w-full h-[90px] flex justify-center backdrop-blur-sm 
                             items-center absolute bottom-0 left-0 
                             opacity-0 group-hover:opacity-100 transition">作品一</div>
        </div>



        <div className="col-span-7 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-6 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-6  bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-4 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer "></div>
        <div className="col-span-4 bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
        <div className="col-span-4  bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"></div>
      </div>
  </div>


  );
}
