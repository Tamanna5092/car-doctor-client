import React, { useContext, useEffect, useState } from "react";
import checkout from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const OrderBook = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div className="my-10">
      {/* image */}
      <div className="relative">
        <img className="w-full" src={checkout} alt="" />
        <div className="absolute flex h-full text-white top-0 left-0 items-center bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl font-bold">Manage All Orders</h1>
            <p className="text-[#FF3811]">Home - Manage All Orders</p>
          </div>
        </div>
      </div>
      <div>
        {/* table */}
        <h1>booking{bookings.length}</h1>
        <table className="table">
          {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Service Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
