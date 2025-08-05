import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import "../styles/animation.css";

function MegaDeal() {
  return (
    <div className="w-[1344px] h-[434.61px] px-[12px] flex">
      {/* Left Side: Image */}
      <div className="w-[752.4px] h-[504.61px]">
        {/* Replace with actual <img> if needed */}
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/h1-banner-burger.png"
          alt="Mega Deal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Description */}
      <div className="w-[514.8px] h-[369.6px] ml-2 flex flex-col justify-between mt-10">
        {/* Block 1: Title */}
        <div
          className="text-[24px] rounded text-white px-4 py-0 tracking-wider "
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
        >
          Special Kombo Pack
        </div>

        {/* Block 2: Headline */}
        <div
          className="text-[60px] rounded  text-white px-4 py-3 leading-[1.2]
"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
        >
          Today's Special burger Menu
        </div>

        {/* Block 3: Description */}
        <div
          className="text-[16px] rounded  text-white px-4 py-4 "
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            lineHeight: "1.6",
          }}
        >
          Massa a of est sit commodo convallis auctor as aliquet ready to ready
          works any more sem. Massa a of est sit commodo any on convallis. Massa
          of est sit commodo.
        </div>

        {/* Block 4: Flex Row — Button + Price */}
        <div className="rounded  text-white flex items-center justify-start gap-x-8 ml-4 mt-3">
          {/* Order Button */}
          <button
            className="text-[16px] p-3 w-40 border border-white rounded-3xl  flex gap-3"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
          >
            <ShoppingCartIcon className="w-4 h-6 ml-2 text-white" />Order Now
          </button>

          {/* Discounted Price */}
          <div
            className="text-[30px] font-bold"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            $20.00
          </div>

          {/* Original Price (Crossed Out) */}
          <div
            className="text-[16px] line-through opacity-70"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
          >
            $23.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaDeal;
