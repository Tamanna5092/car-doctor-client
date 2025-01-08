import React from "react";
import service from "../../assets/images/checkout/checkout.png";

const AddService = () => {

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const service_type = form.service_type.value;
        const text = form.text.value;
        const description = form.description.value;
        console.log(service_name, service_price, service_type, text, description);
    }


  return (
    <div className="mt-10">
      <div>
        {/* image */}
        <div className="relative">
          <img className="w-full" src={service} alt="" />
          <div className="absolute h-full flex text-white top-0 left-0 items-center bg-gradient-to-r from-[#151515] to-[#15151500]">
            <h1 className="text-4xl font-bold pl-4 md:pl-24">
              Add New Service
            </h1>
          </div>
          <div className="absolute w-full flex justify-center bottom-0">
            <p className="text-xl text-white font-medium bg-[#FF3811] px-8 py-3">
              Home/Service
            </p>
          </div>
        </div>
      </div>
      {/* service add */}
      <div className="my-20 bg-[#F3F3F3]">
        <form onSubmit={handleAddService} className="space-y-6 p-4 py-14 md:p-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              id="service_name"
              type="text"
              placeholder="Service Name"
              className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
            <input
              id="service_price"
              type="text"
              placeholder="Service Price"
              className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              id="text"
              type="text"
              placeholder="Text here"
              className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
            <input
              id="service_type"
              type="text"
              placeholder="Service Type"
              className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>
          <div>
            <textarea
              className="w-full rounded-md p-3"
              name=""
              rows={10}
              id="description"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full py-3 font-semibold text-white text-xl bg-[#FF3811] border-[#FF3811] rounded-md dark:bg-violet-600 dark:text-gray-50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
