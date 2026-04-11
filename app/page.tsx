import Image from "next/image";
import Link from "next/link";
import CurvedLoop from "@/components/CurvedLoop";
import ShapeGrid from "@/components/ShapeGrid";

export default function() {
  return (
    <>
      {/* <div>home</div>
        // Non-interactive with slower speed */}
   <div className="relative h-full w-full overflow-hidden">

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center pointer-events-none"> 
          <div className="pointer-events-auto w-full flex justify-center "> {/* 讓文字本身恢復可以被點擊或互動 */}
             {/* <div className="text-2xl font-bold text-[#B1843D]">Home</div> */}
  

            <CurvedLoop 
              marqueeText="⋆｡‧˚ ✦ WELCOME TO ✦ RUIJING LIN’ S ✦ DIGITAL PROFILE ✦"
              speed={1.3}
              curveAmount={-150}
              interactive
              className="text-[#B1843D] text-5xl font-black tracking-widest"

            />
          </div>
        </div>

          <div className="absolute inset-0 z-0">     
            <ShapeGrid
              speed={0.5}
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

