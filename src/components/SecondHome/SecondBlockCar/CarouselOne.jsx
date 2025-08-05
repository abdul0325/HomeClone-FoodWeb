import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";
import Left from "./../Svgs/left";
import Right from "../Svgs/Right";

const foodItems = [
  { id: 1, name: "Pizza", img: "https://picsum.photos/125/132?random=1" },
  { id: 2, name: "Burger", img: "https://picsum.photos/125/132?random=2" },
  { id: 3, name: "Sushi", img: "https://picsum.photos/125/132?random=3" },
  { id: 4, name: "Pasta", img: "https://picsum.photos/125/132?random=4" },
  { id: 5, name: "Salad", img: "https://picsum.photos/125/132?random=5" },
  { id: 6, name: "Steak", img: "https://picsum.photos/125/132?random=6" },
  { id: 7, name: "Fries", img: "https://picsum.photos/125/132?random=7" },
  { id: 8, name: "Wraps", img: "https://picsum.photos/125/132?random=8" },
  { id: 9, name: "Tacos", img: "https://picsum.photos/125/132?random=9" },
];

const VISIBLE_COUNT = 4;
const ITEM_WIDTH = 332; // 312 + 20px gap

function CarouselOne() {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  // Clone first N items to the end for looping effect
  const extendedItems = [...foodItems, ...foodItems.slice(0, VISIBLE_COUNT)];

  const handleNext = () => {
    setStartIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? foodItems.length - 1 : prev - 1
    );
    setIsTransitioning(true);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Loop back instantly when reaching the cloned end
  useEffect(() => {
    if (startIndex === foodItems.length) {
      // wait for transition to end
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 1000); // match the CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [startIndex]);

  const offset = startIndex * ITEM_WIDTH;

  return (
    <div className="w-[1344px] h-[548.4px] pt-[112px] pr-0 pb-[100px] mr-[91.2px] ml-[91.2px]">
      <div>
        <div
          className="text-[#E9004B] text-[14px] tracking-widest pb-[7px] ml-3"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          MORE THAN 1200+DISHES
        </div>

        <div className="flex flex-end gap-235">
          <div>
            <h2
              className="text-[36px] mt-0 text-[#02060C] font-semibold leading-tight pb-[15px] ml-3"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Our Categories
            </h2>
          </div>
          <div className="flex justify-end mt-3 gap-3">
            <div className="w-10 h-10">
              <button
                onClick={handlePrev}
                className="border border-gray-300 rounded-3xl p-2.5 duration-500 hover:bg-[#E9004B] hover:text-white"
              >
                <Left />
              </button>
            </div>
            <div className="w-10 h-10">
              <button
                onClick={handleNext}
                className="border border-gray-300 rounded-3xl p-2.5 duration-500 hover:bg-[#E9004B] hover:text-white"
              >
                <Right />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-container flex justify-center mt-2 overflow-hidden w-[1320px]">
        <div
          ref={trackRef}
          className="carousel-wrapper flex gap-[20px]"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: isTransitioning ? "transform 1s ease" : "none",
          }}
        >
          {extendedItems.map((item, index) => (
            <div className="carousel-item" key={`${item.id}-${index}`}>
              <img src={item.img} alt={item.name} className="food-img" />
              <div className="mt-3">
                <h3
                  className="food-title"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.name} <span className="opacity-50 text-sm">(5)</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselOne;
