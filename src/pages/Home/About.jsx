import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-xl text-[#FF3811] font-bold mb-5">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="pt-8 pb-5 text-[#737373]">
            We pride ourselves on being highly qualified and experienced in the
            field of car servicing. With years of hands-on expertise and a team
            of skilled professionals, we ensure your vehicle receives the care
            it deserves.
          </p>
          <p className="text-[#737373]">
            Our advanced tools and cutting-edge machinery enable us to diagnose
            and resolve issues with precision, guaranteeing optimal performance
            and reliability. Whether it’s routine maintenance or complex
            repairs, our commitment to quality and customer satisfaction sets us
            apart in the industry.
          </p>
          <button className="btn text-white bg-[#FF3811] border-[#FF3811] hover:bg-black mt-7">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
