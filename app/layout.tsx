import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ruijing.lin_",
  description: "ruijing.lin_",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" flex flex-col min-h-screen bg-[#EAD4AD] antialiased">
      <div className="w-screen h-full flex flex-col sm:flex-row   bg-[#EAD4AD] p-6 gap-6 sm:overflow-hidden">

          {/* 左邊  卡片*/}
          {/* <div className="bg-white w-[300px] h-full  p-4  rounded-2xl flex flex-col items-center overflow-y-auto "> */}
          <div className="sm:w-[320px] sm:min-w-[320px] h-full sm:h-full
          min-w-[320px] w-full  rounded-2xl bg-[#FFFEEE] flex justify-start items-center flex-col p-[30px] pt-[30px] overflow-y-auto overflow-x-hidden ">
          <Link href="/home" className=" w-full mt-2 flex justify-center">
              <div className="relative w-[120px] h-[120px] sm:w-[230px] sm:h-[230px]"> <Image src="/head.png" alt="image" width={230} height={230} className="rounded-full transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer " /></div>
          </Link>
            
          
          {/* <div className="bg-gray-200 w-[120px] h-[120px] rounded-full ">大頭照</div> */}
          <div className="text-center mt-3 font-bold text-2xl">⋆｡‧˚ 林芮竫 ˚‧｡⋆</div>
          <div className="text-center ">ruijing.lin</div>
          <div className="text-center text-m mt-2 text-[#B1843D] tracking-widest font-bold">🥨🍪🥖</div>
          <div className="text-center text-s mt-2 text-[#B1843D]  font-bold">第三個字念ㄐㄧㄥˋ !</div>

          {/* 社群連結 */}
          <div className="flex gap-3 mt-6">

          <a href="https://www.instagram.com/ruijing.lin__/" target="_blank" className="group">
          <div className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FFFEEE] transition-all duration-300 group-hover:bg-[#FFE89E] ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
           <div className="background-size:cover;background-position:center"><RiInstagramFill size={24} className=" style= color: #FFE89E   transition-colors group-hover:text-white " /></div>
           </div>
          </a>
           
          <a href="https://www.facebook.com/ruijing.lin?locale=zh_TW" target="_blank" className="group">
          <div className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FFFEEE] transition-all duration-300  group-hover:bg-[#FFE89E] ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
           <div className="background-size:cover;background-position:center"><FaFacebook  size={24} className=" style= color: #FFE89E   transition-colors group-hover:text-white " /></div>
           </div>
          </a>
          
          <a href="https://sites.google.com/view/113102026/home" target="_blank" className="group">
          <div className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FFFEEE] transition-all duration-300  group-hover:bg-[#FFE89E] ease-in-out hover:scale-120 active:scale-80 cursor-pointer">
           <div className="background-size:cover;background-position:center"><MdOutlineWeb  size={24} className=" style= color: #FFE89E   transition-colors group-hover:text-white " /></div>
           </div>
          </a>

          <a href="https://youtube.com/channel/UCUEHrzX445cV6bgtKltcLwQ?si=P0kUu9sXheCHsgS8" target="_blank" className="group">
          <div className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FFFEEE] transition-all duration-300  group-hover:bg-[#FFE89E] ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
           <div className="background-size:cover;background-position:center"><FaYoutube   size={24} className=" style= color: #FFE89E   transition-colors group-hover:text-white " /></div>
           </div>
          </a>

          </div>


          {/* 下方按鈕 */}
          <div className="w-full px-4 mt-2 ">
            <Link href="/about" className="block w-full mt-6">
              <div className="bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-115 active:scale-85 cursor-pointer">ABOUT</div>
            </Link>

            <Link href="/lifelog" className="block w-full mt-6">
              <div className="bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-115 active:scale-85 cursor-pointer">LIFELOG</div>
            </Link>
            
            <Link href="/visual" className="block w-full mt-6">
            <div className="bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-115 active:scale-85 cursor-pointer">VISUAL DESIGN</div>
            </Link>
            
            
            <Link href="/ui" className="block w-full mt-6">
            <div className="bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-115 active:scale-85 cursor-pointer">UI DESIGN</div>
            </Link>

            <Link href="/3D&motion" className="block w-full mt-6">
            <div className="bg-[#F9F2DC] p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold transition-all duration-300 ease-in-out hover:scale-115 active:scale-85 cursor-pointer">3D MOTION</div>
            </Link>

            <div className="h-8 w-full flex-shrink:0"></div>
          
          </div>

          </div>


        {/* 右邊 */}
        <div className="flex-1 h-full bg-[#FFFEEE] rounded-[40px] p-12 overflow-y-auto overflow-x-hidden"> 
           {children}
           </div>
      
      </div>
      
      

      </body>
    </html>
  );
}
