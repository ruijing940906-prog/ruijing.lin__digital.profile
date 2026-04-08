import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { RiFigmaLine } from "react-icons/ri";
import { SiBlender } from "react-icons/si";




export default function About() {
  return (
    <>
      <div className="relative w-full h-full flex rounded-2xl overflow-hidden bg-[#FFFEEE]">
        {/* 1. 底層：你的照片 */}
        <div className="relative w-1/2 h-full">
          <img
            src="/image/aboutmain.jpg"
            className="w-full h-full object-cover"
            alt="Profile"
          />
          {/* 2. 中層：你提供的那段「變色咒語」 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-100/10 to-[#FFFEEE] z-10"></div>
        </div>

        {/* 3. 右側：文字內容（確保在漸層之上） */}
        <div className="relative z-5 w-1/2 p-8 flex flex-col justify-start">
          <h1 className="text-5xl font-bold text-[#B1843D]">林芮竫</h1>
          <h2 className="text-2xl font-bold text-[#B1843D] mt-2">ruijing.lin</h2>
          <h3 className="test-ms text-black mt-5">國立政治大學教育學系</h3>
          <h4 className="test-ms text-black">雙主修數位內容學位學程</h4>
          <h4 className="test-ms text-black mt-4">—</h4>
          <h5 className="test-ms text-black mt-4">名字很難念的同學</h5>
          <h5 className="test-ms text-black mt-4">慢吞吞挑食怪 彰化人但不吃罵丸</h5>
          <h5 className="test-ms text-black mt-4">喜歡可愛的東西</h5>
        
         

          <div className="w-full p-2 my-2">
              <div>
                <h5 className="mt-2 text-xl font-bold flex items-center gap-2 mb-0 text-[#B1843D]">
                  <span className="w-4 h-4 bg-[#EAD4AD] inline-block"></span>
                  Skills
                </h5>
                <span className="w-4 h-4 text-[#B1843D]/30 inline-block"></span>
              </div> 

              <div className="group flex gap-3 mt-0">
              <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]
                transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ">
                <TbBrandAdobeIllustrator size={32} className="text-white" />
              </div>
              <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69] transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ">
                <TbBrandAdobePhotoshop  size={32} className="text-white" />
              </div>
              <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]
                transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ">
                <RiFigmaLine  size={32} className="text-white" />
              </div>
              <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]
                transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ">
                <SiBlender  size={32} className="text-white" />
              </div>
              





            </div>
          </div>
        </div>
      </div>
    </>
  );
}
