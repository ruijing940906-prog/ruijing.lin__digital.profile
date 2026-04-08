"use client";
import Image from "next/image";
import Link from "next/link";

import ImageTrail from "@/components/ImageTrail"

const lifelogImages = [
  "/lifelog/1B5CE81C-7993-437D-815F-1AD6BAA7952A.jpg",
  "/lifelog/38CA2B88-D3CC-4E93-863E-B6E6A2B50F43.jpg",
  "/lifelog/6CCE5612-6DD5-4ADE-B6B9-BF60FA085EE9.jpg",
  "/lifelog/IMG_3159.JPG",
  "/lifelog/IMG_3170.JPG",
  "/lifelog/IMG_3185.JPG",
  "/lifelog/IMG_3212.JPG",
  "/lifelog/IMG_3721.JPG",
  "/lifelog/IMG_3822.JPG",
  "/lifelog/IMG_5154.JPG",
  "/lifelog/IMG_5637.JPG",
  "/lifelog/IMG_5883.JPG",
  "/lifelog/IMG_5986.PNG",
  "/lifelog/IMG_6138.JPG",
  "/lifelog/IMG_6171.JPG",
  "/lifelog/IMG_6621.JPG",
  "/lifelog/IMG_7659.JPG",
];


export default function lifelog() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFFEEE]">
      <ImageTrail 
        items={lifelogImages}
        variant={1}
      >
      {/* <div className="flex flex-col items-center justify-center py-12 shrink-0 pt-20 pb-32">
        <h1 className="text-2xl font-extrabold text-[#EAD4AD] pointer-events-none mb-2">
        一些我的生活 — 我，我喜歡的，我經歷的，構成我的
        </h1>
        
      </div> */}
          <div className="flex flex-col items-center pt-24 pb-12 shrink-0">
      {/* 新的標題內容 */}
      <h2 className="text-lg md:text-xl font-medium text-[#B1843D] tracking-[0.3em] opacity-70 pointer-events-none text-center leading-relaxed">
      ⋆˚꩜｡ 一些我的生活 — 我，我喜歡的，我經歷的，構成我的✮⋆˙
      </h2>
      
      {/* 可以加一個極細的小裝飾線，增加 Dreamcore 的精緻感 */}
      <div className="w-8 h-[3px] bg-[#B1843D]/30 mt-6 pointer-events-none mb-20"></div>
    </div>
          
      {/* ImageTrail 會偵測滑鼠在容器內的移動 */}
      
      
        <div className="relative flex-grow:1  h-full items-center justify-center">
          <h1 className="text-2xl font-extrabold text-[#EAD4AD] pointer-events-none text-center">
            Move Your Mouse
          </h1>
          <h1 className="text-6xl font-black text-[#EAD4AD] pointer-events-none text-center">
            To See my Lifelogs🥨
          </h1>
        </div>
      </ImageTrail>
      <div className="h-8 shrink-0" />
    </div>
  );
}


