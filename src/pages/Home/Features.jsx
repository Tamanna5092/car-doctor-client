import React from "react";
import group from '../../assets/icons/group.svg'
import delivery1 from '../../assets/icons/Group 38729.svg'
import person from '../../assets/icons/person.svg'
import wrench from '../../assets/icons/Wrench.svg'
import check from '../../assets/icons/check.svg'
import delivery2 from '../../assets/icons/deliveryt.svg'

const Features = () => {
  return (
    <div>
      <div className="text-center mx-2 md:mx-0">
        <h3 className="text-xl text-[#FF3811] font-bold">Core Features</h3>
        <h1 className="text-5xl font-bold my-5">Why Choose Us</h1>
        <p className="text-[#737373]">
          We provide expert auto repair and maintenance services
          with precision and care. Our certified mechanics ensure <br />{" "}
          top-quality service, using the latest technology to keep your vehicle
          running smoothly.
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center mx-4 mt-12 gap-3 md:grid-cols-3 lg:grid-cols-6">
      <div>
        <div className="card w-44 h-40 border">
          <figure>
            <img
              src={group}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#444444] mt-5">Expert Team</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-44 h-40 bg-[#FF3811]">
          <figure>
            <img
              src={delivery1}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white mt-5">Timely Delivery</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-44 h-40 border">
          <figure>
            <img
              src={person}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#444444] mt-5">24/7 Support</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-44 h-40 border">
          <figure>
            <img
              src={wrench}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#444444] mt-5">Best Equipment</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-44 h-40 border">
          <figure>
            <img
              src={check}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#444444] mt-5">100% Guranty</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-44 h-40 border">
          <figure>
            <img
              src={delivery2}
              alt=""
              className="flex items-center mt-6"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#444444] mt-5">Timely Delivery</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
