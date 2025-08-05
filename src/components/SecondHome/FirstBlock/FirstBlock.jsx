import React from "react";
import CartBlock from "./CartBlock";
import Text from "./Text";
import Input from "./Input";
import FoodRider from "./FoodRider";
import ImageBlock from "./imageBlock";

function FirstBlock() {
  return (
    //main div to justify center
    <div className="flex justify-center bg-main-block ">
      {/* first div */}
      <div className="flex w-[1344px] justify-center gap-4 items-center justify-self-center">
        <div className="w-[745] h-170 flex justify-self-start ">
          <div className=" mt-33 pt-22  ">
            <div className="mb-10">
              <Text />
            </div>
            <div className="p-3">
              <Input />
            </div>
            <div className="mr-0">
              <FoodRider />
            </div>
          </div>
        </div>
        <div>
          <ImageBlock />
        </div>
      </div>
    </div>
  );
}

export default FirstBlock;
