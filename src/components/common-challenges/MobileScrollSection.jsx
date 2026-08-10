"use client";

import { useEffect, useRef } from "react";

export default function MobileScrollSync() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let animationFrame;

    const handleScroll = () => {
      if (!scrollRef.current) return;

      const content = scrollRef.current;
      const phoneScreen = content.parentElement;
      const section = content.closest(".mobile-demo-section");

      if (!phoneScreen || !section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) / (rect.height + windowHeight);

      const clamped = Math.max(0, Math.min(1, progress));

      const maxTranslate =
        content.scrollHeight - phoneScreen.clientHeight;

      target = clamped * maxTranslate;
    };

    const animate = () => {
      current += (target - current) * 0.08; // smooth easing

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(-${current}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="mobile-demo-section gridboxstreamline item2">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="scroll-content" ref={scrollRef}>
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 1"
            />
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 2"
            />
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 3"
            />
          </div>
        </div>

        <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/mobile-img12_va9ume.png"
          className="frame-image"
          alt="Phone Frame"
        />
      </div>

      <h4>
        Track Every Expense and Time <br />
        Allocated to Your Projects
      </h4>
    </section>
  );
}