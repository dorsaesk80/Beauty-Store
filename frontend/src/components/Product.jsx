import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const Product = ({ img }) => {
  const [value, setValue] = useState(2.403);
  return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[30px] cursor-pointer">
      <img src={img} alt="" className="h-[400px] w-[300px] bg-cover" />
      <h2 className="font-semibold text-[18px] w-[300px]">
        Rosehip Seed ,Argan ,Sweet Almond & Vitamin E Oil-Anti-aging
      </h2>
      <span className="text-[18px] font-semibold flex items-center justify-center">
        $100
      </span>

      <span className="flex items-center">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        (2)
      </span>
    </div>
  );
};

export default Product;
