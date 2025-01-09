import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productLength, setProductLength] = useState(6);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h3 className="text-[#FF3811] text-xl font-bold">Popular Products</h3>
        <h1 className="text-5xl font-bold my-5">Browse Our Products</h1>
        <p className="text-[#737373]">
          Our products are designed to meet the diverse needs of car enthusiasts
          and professionals, offering high-quality <br /> solutions for vehicle
          care, maintenance, and customization.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, productLength).map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
        <div className={productLength === products.length && "hidden"}>
          <div
            onClick={() => setProductLength(products.length)}
            className="text-center"
          >
            <button className="btn btn-outline text-lg font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] border-2">
              More Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
