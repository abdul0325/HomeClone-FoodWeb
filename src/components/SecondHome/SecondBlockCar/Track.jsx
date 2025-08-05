import React from "react";
import { UtensilsCrossed, Bike } from "lucide-react";
import {
  MapPinIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function Track() {
  return (
    <div>
      {/* Title & Description Centered */}
      <div className="flex justify-center text-center">
        <div>
          <h2
            className="text-[36px] pb-[15px] mx-auto w-fit"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
          >
            How to Order?
          </h2>

          <p
            className="text-[16px] mb-[15px] mx-auto max-w-[591.35px]"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            dolor sit amet consectetur. Massa a of est sit commodo convallis
            auctor aliquet ready works any more sem.
          </p>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="w-[1323px] h-[337px] bg-no-repeat bg-cover relative mx-auto flex items-center justify-center mt-10"
        style={{
          backgroundImage:
            "url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/10/h1-Info-shape-1.png')",
        }}
      >
        {/* Grid of 4 Boxes Centered on Background Circle */}
        <div className="w-[1344px] flex justify-between items-center px-3.5 mb-5">
          <div className="w-[315px] h-[235px] flex flex-col items-center justify-center">
            <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
              <a
                className="text-[26px] px-3 w-fit"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                }}
              >
                Choose your location
              </a>

              {/* Small Icon Div Positioned at Bottom */}
              <div className="absolute -bottom-[32px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center">
                <MapPinIcon
                  className="w-10 h-10 text-[#E9004B]"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[235px] flex flex-col items-center justify-center">
            <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
              <a
                className="text-[26px] px-3 w-fit"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                }}
              >
                Choose your Product
              </a>

              {/* Small Icon Div Positioned at Bottom */}
              <div className="absolute -top-[32px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center">
                <ClipboardDocumentListIcon
                  className="w-10 h-10 text-[#E9004B]"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[235px] flex flex-col items-center justify-center">
            <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
              <a
                className="text-[26px] px-3 w-fit"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                }}
              >
                Make your Order
              </a>

              {/* Small Icon Div Positioned at Bottom */}
              <div className="absolute -bottom-[32px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center">
                <UtensilsCrossed
                  className="w-10 h-10 text-[#E9004B]"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[235px] flex flex-col items-center justify-center">
            <div className="relative w-[235px] h-[235px] bg-[#FEF6F7] rounded-full flex items-center justify-center text-center">
              <a
                className="text-[26px] px-3 w-fit"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                }}
              >
                Food is on the way
              </a>

              {/* Small Icon Div Positioned at Bottom */}
              <div className="absolute -top-[32px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-[#FFE0E1] rounded-full text-[#E9004B] flex items-center justify-center">
                <Bike className="w-10 h-10 text-[#E9004B] " strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
