"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const features = [
  {
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img01.jpg",
    title: "Never Miss a Request",
    description:
      "Every enquiry captured and tracked from the moment it comes in.",
  },
  {
      image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img02.jpg",
    title: "Quote Faster, Win More Jobs",
    description:
      "Send professional quotes in minutes — straight from your phone.",
  },
  {
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img03.jpg",
    title: "Every Job On Track",
    description:
      "Manage every project from start to finish without lifting a phone call.",
  },
  {
     image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img04.jpg",
    title: "Your Team, Always Aligned",
    description:
      "Assign jobs, track progress and communicate — all in one place.",
  },
  {
     image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img05.jpg",
    title: "Run Your Business",
    description:
      "Keep everything organised and running smoothly from one place.",
  },
  {
     image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaning-featucher-slider-img05.jpg",
    title: "Run Your Business",
    description:
      "Keep everything organised and running smoothly from one place.",
  },

];

export default function BusinessFeatures() {
  const sliderRef = useRef(null);

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.15,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.15,
      },
    },
  ],
};

  return (
    <section className="business-features">
      <div className="business-features__header">
        <h2>Run Your Business, <span>All in One Place</span></h2>

        <div className="business-features__arrows">
          <button
            type="button"
            className="slider-arrow slider-arrow--prev"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
          >
            ←
          </button>

          <button
            type="button"
            className="slider-arrow slider-arrow--next"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="business-features__slider">
        <Slider ref={sliderRef} {...settings}>
          {features.map((item, index) => (
            <div className="business-features__slide"  key={index}>
              <article className="business-card">
                <div className="business-card__image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}