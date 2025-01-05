import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [dataLength, setDataLength] = useState(3);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-xl text-center text-[#FF3811] font-bold">
          Service
        </h3>
        <h1 className="text-5xl text-center text-[#151515] font-bold">
          Our Service Area
        </h1>
        <p className="text-center text-[#737373] my-5">
          Our services are designed to meet all your car maintenance and repair
          needs with precision and care. From routine oil changes <br /> and
          tire rotations to advanced diagnostics and engine repairs, we cover it
          all.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0,dataLength).map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
        <div className={dataLength === services.length && 'hidden'}>
        <div onClick={()=> setDataLength(services.length)} className="flex justify-center">
            <button className="btn btn-outline text-lg font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] border-2">
            More Services
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
