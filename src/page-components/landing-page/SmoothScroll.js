// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "lenis/dist/lenis.css";

// export default function SmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1,
//       smoothWheel: true,
//       syncTouch: false,
//       wheelMultiplier: 1,
//       touchMultiplier: 1,
//       // autoRaf: true,
//     });

//     lenis.on("scroll", ScrollTrigger.update);

//     return () => {
//       lenis.off("scroll", ScrollTrigger.update);
//       lenis.destroy();
//     };
//   }, []);

//   return null;
// }




"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}