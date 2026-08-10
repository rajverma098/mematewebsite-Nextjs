"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const column1Images = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img01.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img02.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img03.png",
   "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img04.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img05.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img06.png",
   "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img07.png",
];

const column2Images = [
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img021.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img022.png",
   "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img02.png3.png",
   "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img024.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img025.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img026.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img027.png",
];

const column3Images = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img031.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img032.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img033.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img034.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img035.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img036.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img037.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img038.png",
];

const column4Images = [
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img041.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img042.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img043.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img044.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img045.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img046.png",
 "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/onboarding-img047.png",
];

const col1Images = [...column1Images, ...column1Images];
const col2Images = [...column2Images, ...column2Images];
const col3Images = [...column3Images, ...column3Images];
const col4Images = [...column4Images, ...column4Images];

export default function InfiniteDualSlider() {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  const pausedRef = useRef(false);

  useEffect(() => {
    const tracks = [
      { ref: col1Ref, speed: 35 },
      { ref: col2Ref, speed: 30 },
      { ref: col3Ref, speed: 40 },
      { ref: col4Ref, speed: 60 },
    ];

    let rafId;
    let lastTime = performance.now();

    const positions = tracks.map(() => 0);
    let heights = tracks.map(() => 0);

    // ✅ Wait until images load properly
    const updateHeights = () => {
      heights = tracks.map(
        (t) => (t.ref.current?.scrollHeight || 0) / 2
      );
    };

    // Run once after full render
    setTimeout(updateHeights, 500);

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!pausedRef.current) {
          tracks.forEach((track, i) => {
            positions[i] -= (track.speed * delta) / 1000;

            if (positions[i] <= -heights[i]) {
              positions[i] += heights[i];
            }

            if (track.ref.current) {
              track.ref.current.style.transform =
                `translate3d(0, ${positions[i]}px, 0)`;
            }
          });
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    tracks.forEach((t) => {
      t.ref.current?.addEventListener("mouseenter", pause);
      t.ref.current?.addEventListener("mouseleave", resume);
    });

    return () => {
      cancelAnimationFrame(rafId);
      tracks.forEach((t) => {
        t.ref.current?.removeEventListener("mouseenter", pause);
        t.ref.current?.removeEventListener("mouseleave", resume);
      });
    };
  }, []);

  return (
    <div className="bg_slider">
      <div className="ui-grid">
        {/* Column 1 */}
        <div className="ui-col">
          <div className="slide_track" ref={col1Ref}>
            {col1Images.map((img, i) => (
              <div className="ui-card card-sm" key={`c1-${i}`}>
                <Image src={img} alt="" width={420} height={300} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="ui-col">
          <div className="slide_track" ref={col2Ref}>
            {col2Images.map((img, i) => (
              <div className="ui-card card-lg" key={`c2-${i}`}>
                <Image src={img} alt="" width={420} height={420} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="ui-col">
          <div className="slide_track" ref={col3Ref}>
            {col3Images.map((img, i) => (
              <div className="ui-card card-md" key={`c3-${i}`}>
                <Image src={img} alt="" width={420} height={360} />
              </div>
            ))}
          </div>
        </div>
        {/* Column 4 */}
        <div className="ui-col">
          <div className="slide_track" ref={col4Ref}>
            {col4Images.map((img, i) => (
              <div className="ui-card card-md" key={`c4-${i}`}>
                <Image src={img} alt="" width={420} height={360} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
