import React, { useState } from "react";
import Select from "../Svgs/Select";
import Search from "../Svgs/Search";
import { HiChevronDown } from "react-icons/hi";

const categories = [
  "BreakFast",
  "Burger",
  "Chinese",
  "Dinner",
  "FastFood",
  "Lunch",
  "Pasta",
  "Pizza",
  "Rice",
];

function Input() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => setIsOpen(true), 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsOpen(false);
  };

  const handleSelect = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="flex items-center justify-center w-[627px] h-[55px] border border-black rounded-md  gap-9">
      {/* Custom Dropdown */}
      <div
        className="relative group w-[180px] h-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center border border-none rounded px-2 h-full cursor-pointer bg-white">
          {/* Dull icon */}
          <Select className="w-3 h-3 mr-2 opacity-50" />
          <span
            className={`flex-1 text-sm ${
              selectedCategory ? "text-black" : "text-gray-400"
            }`}
          >
            {selectedCategory || "Select Category"}
          </span>
          <HiChevronDown className="text-gray-400 w-4 h-4 transition-transform duration-300 transform group-hover:rotate-[-90deg]" />
        </div>

        {/* Dropdown Options */}
        <ul
          className={`absolute left-0 mt-1 w-full bg-white rounded shadow-md hidden group-hover:block z-10 transition-opacity duration-500 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:text-[#E9004B] cursor-pointer text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <span className="text-gray-300 select-none">|</span>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Type Your Products..."
        className="w-[180px] h-10 bg-transparent outline-none placeholder:text-gray-400"
      />

      {/* Button */}
      <button className="bg-[#E9004B] text-white h-11 px-5 rounded-tr-[5px] hover:bg-black duration-300 hover:text-white rounded-br-[5px] flex items-center gap-2">
        <Search /> Find Food
      </button>
    </div>
  );
}

export default Input;
