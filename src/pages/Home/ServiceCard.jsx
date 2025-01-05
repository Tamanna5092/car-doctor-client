import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card card-compact bg-base-100 w-96 border p-5">
              <figure>
                <img className="w-full h-56 object-cover"
                  src={img}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#444444] text-2xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                <h3 className="text-xl text-[#FF3811] font-semibold">Price : ${price}</h3>
                <Link to={`/checkout/${_id}`} className="text-xl text-[#FF3811] font-semibold"><FaArrowRightLong /></Link>
                </div>
              </div>
            </div>
    );
};

export default ServiceCard;