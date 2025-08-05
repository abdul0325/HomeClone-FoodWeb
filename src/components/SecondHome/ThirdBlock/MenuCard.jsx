// components/ProductCard.jsx
import React, { useState } from "react";
import "../styles/carousel.css";

const categories = ["All", "Rice", "Chinese", "Burger", "Dinner"];

const foodItems = [
  {
    id: 1,
    category: ["Rice", "Dinner", "Lunch"],
    title: "Vegetable Salad",
    type: "Dinner,Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-7-min-112x112.jpg",
    originalPrice: "$15.00",
    discountPrice: "$14.00",
  },
  {
    id: 2,
    category: ["Rice", "Dinner"],
    title: "Mushroom Soup",
    type: "Dinner,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-8-min-112x112.jpg",
    originalPrice: "$25.00",
    discountPrice: "$21.00",
  },
  {
    id: 3,
    category: ["Dinner", "Pizza"],
    title: "Beyti Kebab",
    type: "Dinner,Pizza",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-9-min-112x112.jpg",
    originalPrice: "$16.00",
    discountPrice: "$15.00",
  },
  {
    id: 4,
    category: ["Burger", "Chinese", "Lunch"],
    title: "Burger with Meat",
    type: "Burger,Chinese,Lunch",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-10-min-112x112.jpg",
    originalPrice: "$22.00",
    discountPrice: "$16.00",
  },
  {
    id: 5,
    category: ["Rice", "Chinese", "Lunch"],
    title: "Stewed Beef Meat",
    type: "Chinese,Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-11-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 6,
    category: ["Rice", "Chinese"],
    title: "Rice with Sausage",
    type: "Chinese,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/product-6-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 7,
    category: ["Rice", "Chinese"],
    title: "Fried Rice Served",
    type: "Chinese,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-12-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 8,
    category: ["Rice", "Lunch"],
    title: "Lula Kebab Adjika",
    type: "Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-13-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$18.00",
  },
  {
    id: 9,
    category: ["Pizza", "Burger", "Chinese"],
    title: "Alasta Sandwitch",
    type: "Burger,Chinese,Pizza",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-14-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
];

function MenuCard() {
  const [selected, setSelected] = useState("All");

  const filteredItems =
    selected === "All"
      ? foodItems
      : foodItems.filter((item) => item.category.includes(selected));

  return (
    <div className="w-[1344px] h-[895.6px] mx-[91.2px] pt-[95px] mb-[114px]">
      {/* Category Buttons */}
      <div className="w-[1320px] h-[61.6px] mb-[35px] flex justify-between items-center border-b-2 border-gray-300">
        {categories.map((cat, index) => (
          <div className="">
            <button
              key={index}
              className={`text-[26px] px-[25px] py-3 transition-all duration-200 border-b-2 w-50 ${
                selected === cat
                  ? "text-[#E9004B] border-[#E9004B]"
                  : "text-[#E9004B] border-transparent"
              }`}
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          </div>
        ))}
      </div>

      {/* Filtered Cards */}
      <div className="flex flex-wrap gap-x-[40px] gap-3 ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="w-[419.99px] h-[155px] bg-white mb-[30px] p-[20px] flex items-center rounded-xl"
          >
            {/* Image */}
            <div className="w-[112px] h-[112px] mr-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-[22px] text-black"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] text-gray-900"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.type}
                </p>
              </div>

              <div className="flex items-center gap-x-4 mt-2">
                <span
                  className="text-[14.5px] line-through opacity-70"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.originalPrice}
                </span>
                <span
                  className="text-[19px] font-bold"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.discountPrice}
                </span>
                <button
                  className="text-[14px] border border-[#E9004B] text-[#E9004B] rounded-2xl p-1.5 w-30 "
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
