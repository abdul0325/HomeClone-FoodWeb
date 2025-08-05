import CartBlock from "./CartBlock";
import "../styles/animation.css";

export default function Text() {
  return (
    <div className="w-[650px]">
      <div className="w-[650px] animate-tilt-scale">
        <div
          className="text-[#E9004B] text-[14px] tracking-widest"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          EASY WAY TO ORDER YOUR FOOD
        </div>
      </div>
      <div className="w-[650px] mt-3 animate-tilt-scale">
        <h1
          className="text-[36px] mt-0 ml-0 text-[#02060C] font-semibold leading-tight"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          Online Ordering System for Restaurants
        </h1>
      </div>
    </div>
  );
}
