import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


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
      <body className="min-h-full flex flex-col">
      <div className="w-screen h-screen flex flex-col sm:flex-row   bg-gray-200 p-6 gap-6 overflow-hidden">

          {/* 左邊  卡片*/}
          {/* <div className="bg-white w-[300px] h-full  p-4  rounded-2xl flex flex-col items-center overflow-y-auto "> */}
          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex justify-start items-center flex-col p-[30px] pt-[30px] overflow-y-auto overflow-x-hidden">
          <Link href="/home" className=" w-full mt-2 flex justify-center">
              <div> <Image src="/head.png" alt="image" width={230} height={230} className="rounded-full " /></div>
          </Link>
            
          
          {/* <div className="bg-gray-200 w-[120px] h-[120px] rounded-full ">大頭照</div> */}
          <div className="text-center mt-3 font-bold text-2xl">⋆｡‧˚ 林芮竫 ˚‧｡⋆</div>
          <div className="text-center ">ruijing.lin</div>
          <div className="text-center mt-6">簡介</div>

          {/* 社群連結 */}
          <div className="flex gap-2 mt-6">
            <div>社群連結</div>
            <div>社群連結</div>
            <div>社群連結</div>
          </div>

          
          <div className="w-full px-4 mt-2 ">
            <Link href="/about" className="block w-full mt-6">
              <div className="bg-gray-300 p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold">ABOUT</div>
            </Link>

            <Link href="/lifestyle" className="block w-full mt-6">
              <div className="bg-gray-300 p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold">LIFESTYLE</div>
            </Link>
            
            <Link href="/visual" className="block w-full mt-6">
            <div className="bg-gray-300 p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold">VISUAL DESIGN</div>
            </Link>
            
            
            <Link href="/ui" className="block w-full mt-6">
            <div className="bg-gray-300 p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold">UI DESIGN</div>
            </Link>

            <Link href="/3D&motion" className="block w-full mt-6">
            <div className="bg-gray-300 p-[16px] py-8 mt-6 rounded-2xl text-center w-full h-full font-bold">3D MOTION</div>
            </Link>

            <div className="h-8 w-full flex-shrink:0"></div>
          
          </div>

          </div>


        {/* 右邊 */}
        <div className="flex-1 h-full bg-white rounded-[40px] p-12 overflow-y-auto"> 
           {children}
           </div>
      
      </div>
      
      

      </body>
    </html>
  );
}
