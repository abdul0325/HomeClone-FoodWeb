import React from "react";
import "../styles/animation.css";

function AppDetail() {
  return (
    <div className="w-[1344px] h-[434.61px] px-[12px] flex justify-center items-center m-[15px] gap-x-8 ml-15">
      {/* Left Side: Image */}
      <div className="w-[396px] h-[396.9px] flex items-end mt-[37px]">
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2025/02/Download-Apps.png"
          alt="Mega Deal"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Side: Description */}
      {/* Right Side: Description */}
      <div className="w-[514.8px] h-[369.6px] ml-[15px] flex flex-col gap-y-4 justify-center">
        {/* Block 1: Title */}
        <div
          className="text-[14px] text-white px-4 tracking-wider"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
        >
          DOWNLOAD APPS
        </div>

        {/* Block 2: Headline */}
        <div
          className="text-[36px] text-white px-4 leading-snug"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
        >
          Download our Free App!
        </div>

        {/* Block 3: Description with check marks */}
        <div
          className="text-[16px] text-white px-4 space-y-1"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            lineHeight: "1.4",
          }}
        >
          <div>✔ Find the nearest restaurant</div>
          <div>✔ Order food online</div>
          <div>✔ Delivery food near me</div>
        </div>

        {/* Block 4: Buttons */}
        <div className="flex items-center gap-x-4 px-4 mt-2">
          <div className="w-[189.1px] h-[54.31px] bg-apple"></div>
          <div className="w-[189.1px] h-[54.31px] bg-googlePlay"></div>
        </div>
      </div>
    </div>
  );
}

export default AppDetail;
