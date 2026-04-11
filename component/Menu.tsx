"use client";

import Image from "next/image";
import Link from "next/link";
import CurvedLoop from "@/components/CurvedLoop";
import ShapeGrid from "@/components/ShapeGrid";

export default function Home() { // 💡 建議給 function 一個名字，方便除錯
  return (
    <>
      {/* 💡 使用 min-h-screen 確保填滿螢幕，w-screen 避免橫向溢出 */}
      <div className="relative min-h-screen md:flex-row w-screen overflow-hidden bg-[#FFFEEE]">
        

        {/* 💡 z-10 內容層 */}
        <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center pointer-events-none px-4"> 
          <div className="pointer-events-auto w-full flex justify-center">
            
            <CurvedLoop 
              marqueeText="⋆｡‧˚ ✦ WELCOME TO ✦ RUIJING LIN’ S ✦ DIGITAL PROFILE ✦"
              speed={1.3}
              // 💡 如果 CurvedLoop 支援動態調整，建議小螢幕弧度小一點
              curveAmount={-100} 
              interactive
              // 💡 關鍵修正：text-2xl (手機) -> md:text-5xl (電腦)
              className="text-[#B1843D] text-2xl md:text-5xl font-black tracking-widest text-center"
            />

          </div>
        </div>

        {/* 💡 z-0 背景層 */}
        <div className="absolute inset-0 z-0">     
          <ShapeGrid
            speed={0.5}
            // 💡 手機上格子可以稍微縮小一點（如 30），看起來更精緻
            squareSize={40}
            direction="diagonal"
            borderColor="#ffe89e"
            hoverFillColor="#f1e7ca"
            shape="square"
            hoverTrailAmount={6}
          />
        </div>
      </div>
    </>
  );
}




























// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import CurvedLoop from "@/components/CurvedLoop";
// import ShapeGrid from "@/components/ShapeGrid";

// export default function() {
//   return (
//     <>
//       {/* <div>home</div>
//         // Non-interactive with slower speed */}
//    <div className="relative h-full w-full overflow-hidden">

//         <div className="relative z-10 h-full w-full flex flex-col items-center justify-center pointer-events-none"> 
//           <div className="pointer-events-auto w-full flex justify-center "> {/* 讓文字本身恢復可以被點擊或互動 */}
//              {/* <div className="text-2xl font-bold text-[#B1843D]">Home</div> */}
  

//             <CurvedLoop 
//               marqueeText="⋆｡‧˚ ✦ WELCOME TO ✦ RUIJING LIN’ S ✦ DIGITAL PROFILE ✦"
//               speed={1.3}
//               curveAmount={-150}
//               interactive
//               className="text-[#B1843D] text-5xl font-black tracking-widest"

//             />
//           </div>
//         </div>

//           <div className="absolute inset-0 z-0">     
//             <ShapeGrid
//               speed={0.5}
//               squareSize={40}
//               direction="diagonal"
//               borderColor="#ffe89e"
//               hoverFillColor="#f1e7ca"
//               shape="square"
//               hoverTrailAmount={6}
//             />
//          </div>


//   </div>
//     </>
//   );
// }

