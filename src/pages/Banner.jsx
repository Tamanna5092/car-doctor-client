import React from "react";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide6"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Premium Car Servicing Solutions
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              Keep your vehicle running smoothly with our expert car servicing.
              From oil changes to full diagnostics, we've got you covered
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide1"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Reliable Car Maintenance Services
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              Extend the life of your car with our professional maintenance
              solutions, including tire rotations, brake checks, and fluid
              replacements
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide2"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Sparkling Clean Every Time
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              Enjoy a spotless finish with our premium car wash services,
              ensuring your car looks as good as new inside and out There are
              many variations of passages of available, but the majority have
              suffered alteration in some form
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide3"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Smooth Suspension Services
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              Experience a smoother ride with our advanced machinery designed to
              repair and align your car’s suspension system
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide4"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 pl-4 md:pl-20">
            <h1 className="max-w-sm text-6xl font-bold md:w-[460px]">
              Advanced Brake System Care
            </h1>
            <p className="max-w-sm text-lg md:w-[520px]">
              Stay safe on the road with our cutting-edge machinery for brake
              system diagnostics and repairs
            </p>
            <div className="space-x-6">
              <button className="btn text-white bg-[#FF3811] border-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white bg-transparent">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide5"
            className="btn btn-circle text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle text-white bg-[#FF3811] border-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
