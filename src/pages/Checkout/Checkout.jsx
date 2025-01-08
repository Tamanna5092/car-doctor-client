import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id, img} = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value; 
    const booking ={
      customerName: name,
      email,
      date,
      service_title: title,
      image: img,
      service_id: _id,
      price,
    } 
    console.log(booking)

    fetch('http://localhost:5000/bookings', {
      
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        alert('Service placed successfully')
      }
    })

  }


  return (
    <div className='mt-10'>
        {/* image */}
      <div className="relative">
        <img className="w-full" src={checkout} alt="" />
        <div className="absolute h-full flex text-white top-0 left-0 items-center bg-gradient-to-r from-[#151515] to-[#15151500]">
          <h1 className="text-4xl font-bold pl-4 md:pl-24">Checkout</h1>
        </div>
        <div className="absolute w-full flex justify-center bottom-0">
          <p className="text-xl text-white font-medium bg-[#FF3811] px-8 py-3">
            Home/Checkout
          </p>
        </div>
      </div>
      {/* checkout form */}
      <section className="my-20 bg-[#F3F3F3] dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleCheckOut}
          action=""
          className="container flex flex-col mx-auto space-y-12 p-4 py-14 md:p-24"
        >
          <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
            <label htmlFor="name" className="text-lg">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="date" className="text-lg">Service Date</label>
              <input
                id="date"
                type="date"
                placeholder="Date"
                className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="price" className="text-lg">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Price"
                defaultValue={price}
                className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-lg">Your Email</label>
              <input
                id="email"
                type="text"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="w-full rounded-md p-3 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <input
                type="submit"
                value="Order Confirm"
                className="w-full py-3 font-semibold text-white text-xl bg-[#FF3811] border-[#FF3811] rounded-md dark:bg-violet-600 dark:text-gray-50"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
