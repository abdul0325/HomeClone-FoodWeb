import "../styles/carousel.css";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg", // replace with your own
    name: "Merrry Jiucy",
    title: "Web Designer",
  },
  {
    id: 2,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg",
    name: "Mr,Marke Josefer",
    title: "CEO, PSDBOSS",
  },
  {
    id: 3,
    text: "“ I believe in lifelong learning and kola is an great any more learn from experts. I've as recommend it all my ready to friends “",
    image: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/avatar-image1.jpg",
    name: "Ronald Richards",
    title: "WordPress Developer",
  },
];

function ClientAbout() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-[1526.4px] h-[701.1px] p-0 m-0">
      <div className="flex flex-col text-center">
        <div
          className="text-[36px] pb-[15px] mx-auto w-[671.61px] h-[60px] "
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
        >
          Clients About Us
        </div>
        <div
          className="text-[16px] pb-[15px] mx-auto w-[671.61px] h-[52px]"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
        >
          dolor sit amet consectetur. Massa a of est sit commodo convallis
          auctor aliquet ready works any more sem.
        </div>
      </div>
      <div className="w-[1526.4px] h-[401.1px] pb-[50px] bg-clientAbout mt-10 flex flex-col items-center justify-center ">
        {/* Card Container */}
        <div  className="w-[522.45px] h-[391.1px] bg-white border-b-6 border-[#E5E4E2] rounded-xl p-[55px] text-center relative transition-all duration-500 flex flex-col justify-end gap-[10px]">
          {/* Testimonial Text */}
          <p
            className="text-[18px] mb-8 leading-snug text-[#02060C]"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
          >
            {testimonials[current].text}
          </p>

          {/* Person Info */}
          <div className="flex items-center justify-center">
            <div className="flex mr-3">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-[45px] h-[46px] rounded-full object-cover mt-0"
            /></div>
            <div>
            <div
              className="text-[18px] text-start font-semibold w-[162px] h-[35.22px] tracking-wide "
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {testimonials[current].name}
            </div>
            <div className="text-[15px] text-start text-[#848484]  w-[152px] h-[19px]">
              {testimonials[current].title}
            </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="mt-6 flex space-x-3">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-6 h-1 cursor-pointer transition-all duration-300 ${
                current === index ? "bg-[#E9004B]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientAbout;
