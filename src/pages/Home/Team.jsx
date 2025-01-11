import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-[#FF3811] text-xl font-bold">Team</h3>
        <h1 className="text-5xl font-bold my-5">Meet Our Team</h1>
        <p className="text-[#737373]">
        Our team is a dynamic group of dedicated professionals driven by a shared passion for excellence. With diverse expertise and a commitment to <br /> innovation, we collaborate to deliver exceptional results and create meaningful solutions.
        </p>
      </div>
      <div className="mt-10">
        <TeamCard></TeamCard>
      </div>
    </div>
  );
};

export default Team;
