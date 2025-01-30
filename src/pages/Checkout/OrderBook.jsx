import React, { useEffect, useState } from "react";
import checkout from "../../assets/images/checkout/checkout.png";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";

const OrderBook = () => { 
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const [bookings, setBookings] = useState([]);


  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url)
    .then(res => setBookings(res.data))
  }, [axiosSecure]);


  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete?');
    if(proceed){
      fetch(`https://car-doctor-server-gamma-lilac.vercel.app/bookings/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Booking deleted successfully');
          const remainingBookings = bookings.filter(booking => booking._id !== id)
          setBookings(remainingBookings);
        }
      })
    }
  }

  const handleBookingConfirm = id => {
    fetch(`https://car-doctor-server-gamma-lilac.vercel.app/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.modifiedCount > 0){
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)
      }
    })
  };

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
              <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
