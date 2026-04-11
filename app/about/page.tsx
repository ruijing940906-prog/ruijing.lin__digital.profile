

"use client";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
import { RiFigmaLine } from "react-icons/ri";
import { SiBlender } from "react-icons/si";
import SplitText from "@/components/SplitText";
// import Menu from"@/component/Menu";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function About() {
  return (
    <>
      {/* 💡 修正 1：h-full 改為 min-h-screen (手機版要能捲動) 
          💡 修正 2：flex 改為 flex-col (手機) md:flex-row (電腦) */}
      <div className="relative w-full min-h-screen md:h-full flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#FFFEEE] scrollbar-custom">
        
        {/* 1. 照片區：手機版佔上方 40% 高度，電腦版佔左半邊 */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-full flex-shrink-0">
          <img
            src="/image/aboutmain.jpg"
            className="w-full h-full object-cover"
            alt="Profile"
          />
          {/* 漸層遮罩：手機版由下往上，電腦版由左往右 */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-linear-to-r from-[#FFFEEE]/50 via-sky-100/10 to-transparent md:to-[#FFFEEE] z-10"></div>
        </div>

        {/* 2. 文字內容區：手機版 w-full，內距稍微縮小 */}
        <div className="relative z-20 w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-start items-start leading-relaxed bg-[#FFFEEE]">
          
          <SplitText
            text="林芮竫"
            // 💡 修正 3：字體大小響應式 text-4xl (手機) -> md:text-5xl (電腦)
            className="text-4xl md:text-5xl text-left font-extrabold text-[#B1843D] tracking-[0.2em]"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <h2 className="text-xl md:text-2xl font-bold text-[#B1843D] mt-2 opacity-80">ruijing.lin</h2>
          
          {/* 文字內容：修正 test-ms (應該是 text-sm 或 text-base) */}
          <div className="mt-6 space-y-3 text-black font-medium tracking-[0.1em] opacity-80 text-sm md:text-base">
            <h3>國立政治大學教育學系</h3>
            <h4>雙主修數位內容學位學程</h4>
            <h4 className="py-2">—</h4>
            <h5>名字很難念的同學</h5>
            <h5>慢吞吞挑食怪 彰化人但不吃罵丸</h5>
            <h5>喜歡可愛的東西</h5>
          </div>

          {/* 技能區塊 */}
          <div className="w-full mt-10">
            <h5 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-4 text-[#B1843D]/70">
              <span className="w-3 h-3 md:w-4 md:h-4 bg-[#EAD4AD] inline-block"></span>
              Skills
            </h5>
            
            {/* 💡 修正 4：flex-wrap 確保圖示在手機寬度不足時會換行 */}
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center bg-[#D4BB69]/70 transition-all hover:scale-110 cursor-pointer">
                <TbBrandAdobeIllustrator size={28} className="text-white" />
              </div>
              <div className="flex w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center bg-[#D4BB69]/70 transition-all hover:scale-110 cursor-pointer">
                <TbBrandAdobePhotoshop size={28} className="text-white" />
              </div>
              <div className="flex w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center bg-[#D4BB69]/70 transition-all hover:scale-110 cursor-pointer">
                <RiFigmaLine size={28} className="text-white" />
              </div>
              <div className="flex w-12 h-12 md:w-14 md:h-14 rounded-full items-center justify-center bg-[#D4BB69]/70 transition-all hover:scale-110 cursor-pointer">
                <SiBlender size={28} className="text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}













// "use client";
// import { TbBrandAdobeIllustrator } from "react-icons/tb";
// import { TbBrandAdobePhotoshop } from "react-icons/tb";
// import { RiFigmaLine } from "react-icons/ri";
// import { SiBlender } from "react-icons/si";

// import SplitText from "@/components/SplitText";

// const handleAnimationComplete = () => {
//   console.log('All letters have animated!');
// };




// export default function About() {
//   return (
//     <>
//       <div className="relative w-full h-full flex rounded-2xl overflow-hidden bg-[#FFFEEE] scrollbar-custom">
//         {/* 1. 底層：你的照片 */}
//         <div className="relative w-1/2 h-full">
//           <img
//             src="/image/aboutmain.jpg"
//             className="w-full h-full object-cover"
//             alt="Profile"
//           />
//           {/* 2. 中層：你提供的那段「變色咒語」 */}
//           <div className="absolute inset-0 bg-linear-to-r from-transparent via-sky-100/10 to-[#FFFEEE] z-10"></div>
//         </div>

//         {/* 3. 右側：文字內容（確保在漸層之上） */}
//         <div className="relative z-20 w-1/2 p-8 flex flex-col justify-start text-lg md:text-[12px] font-medium text-[#B1843D] tracking-[0.3em] opacity-70 text-left items-start leading-relaxed">
//         {/* <SplitText
//           text="Hello, you!"
//           text-black
//           className="text-2xl font-semibold text-center"
//           delay={50}
//           duration={1.25}
//           ease="power3.out"
//           splitType="chars"
//           from={{ opacity: 0, y: 40 }}
//           to={{ opacity: 1, y: 0 }}
//           threshold={0.1}
//           rootMargin="0px"
//           textAlign="center"
//           onLetterAnimationComplete={handleAnimationComplete}
//         /> */}
//         <SplitText
//         text="林芮竫"
//         className="text-5xl text-left font-extrabold text-[#B1843D] "
//         delay={50}
//         duration={1.25}
//         ease="power3.out"
//         splitType="chars"
//         from={{ opacity: 0, y: 40 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
//         textAlign="center"
//         onLetterAnimationComplete={handleAnimationComplete}
//       />

//           {/* <h1 className="text-5xl font-bold text-[#B1843D]">林芮竫</h1> */}
//           <h2 className="text-2xl font-bold text-[#B1843D] mt-2">ruijing.lin</h2>
//           <h3 className="test-ms text-black mt-5">國立政治大學教育學系</h3>
//           <h4 className="test-ms text-black mt-4">雙主修數位內容學位學程</h4>
//           <h4 className="test-ms text-black mt-4">—</h4>
//           <h5 className="test-ms text-black mt-4">名字很難念的同學</h5>
//           <h5 className="test-ms text-black mt-4">慢吞吞挑食怪 彰化人但不吃罵丸</h5>
//           <h5 className="test-ms text-black mt-4">喜歡可愛的東西</h5>
        
         

//           <div className="w-full p-2 my-2">
//               <div>
//                 <h5 className="mt-2 text-xl font-bold flex items-center gap-2 mb-0 text-[#B1843D]/70">
//                   <span className="w-4 h-4 bg-[#EAD4AD] inline-block"></span>
//                   Skills
//                 </h5>
//                 <span className="w-4 h-4 text-[#B1843D]/30 inline-block"></span>
//               </div> 

//               <div className="group flex gap-3 mt-0">
//               <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]/70
//                 transition-all duration-300 ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
//                 <TbBrandAdobeIllustrator size={32} className="text-white" />
//               </div>
//               <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]/70 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer ">
//                 <TbBrandAdobePhotoshop  size={32} className="text-white" />
//               </div>
//               <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]/70
//                 transition-all duration-300 ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
//                 <RiFigmaLine  size={32} className="text-white" />
//               </div>
//               <div className="flex w-14 h-14 rounded-full items-center justify-center bg-[#D4BB69]/70
//                 transition-all duration-300 ease-in-out hover:scale-120 active:scale-80 cursor-pointer ">
//                 <SiBlender  size={32} className="text-white" />
//               </div>
              





//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
