import React from "react";
import Cart from "../Svgs/cart";
function CartBlock() {
  return (
    <>
      <div className="flex flex-wrap justify- items-center w-[616.4] h-[356]">
        <div className="flex flex-wrap ml-4 mt-60 ">
          <div className="w-20 h-[106.4px] bg-[#E52B50] rounded-xl">
            <div className="w-20 h-[72.8px] flex flex-wrap">
              <div className="flex justify-center items-center mb-0 mr-0 mt-1 w-20 h-10">
                <Cart />
              </div>
              <div className="flex justify-center items-center w-20 h-[26.8] text-white mt-0">
                <span className="mr-1 text-sm">0</span>
                <span className="mr-1 text-sm">Items</span>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center bg-[#FB607F]/90 rounded-2xl w-11 mt-1">
                <span className="ml-0 text-white text-sm">$</span>
                <span className="mr-0 text-white text-sm">0</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartBlock;
