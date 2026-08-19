// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import "lenis/dist/lenis.css";

// export default function SmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       syncTouch: true,
//       autoRaf: true,
//     });

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// }


"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      autoRaf: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return null;
}