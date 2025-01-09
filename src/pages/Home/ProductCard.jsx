import React from "react";

const ProductCard = ({ product }) => {
    const {image, title, price, rating } = product;
  return (
    <div className="card border-2 w-96">
      <figure className="p-6">
        <img
          src={image}
          alt=""
          className="w-96 h-60 rounded-xl bg-gray-200"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-2xl text-[#FF912C]">{rating}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-xl text-[#FF3811] font-semibold">${price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
