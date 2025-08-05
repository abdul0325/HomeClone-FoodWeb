import CarouselOne from "./CarouselOne";
import Deals from "./Deals";
import MegaDeal from "./MegaDeal";
import Track from "./Track";
import "../styles/animation.css";

function SecondBlock() {
  return (
    <div>
      <div>
        {" "}
        <CarouselOne />
      </div>
      <div className="w-[1344] h-[708] mt-0 ml-[91.2px] mr-[91.2px] pt-[90px] pr-0 pb-[167] bg-track">
        <Track />
      </div>
      <div className="w-[1344] h-[1237.5] mt-0 ml-[91.2px] mr-[91.2px] pt-[90px] pr-0 pb-[167]">
        <Deals />
      </div>
      <div className=" bg-[#E9004B] bg-mega-deal">
        <div className="w-[1344px] h-[610.61px] mx-[91.2px] pt-[80px] pb-[90px] mt-0 ml-[91.2px] mr-[91.2px]  pr-0]">
          <MegaDeal />
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;
