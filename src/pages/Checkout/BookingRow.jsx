import React from "react";

const Booking = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, price, service_title, email, image, date, status } = booking;

 
  return (
    <tr>
      <th>
        <button onClick={()=> {handleDelete(_id)}} className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_title}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {
          status === 'confirm'? <span>Confirmed</span> : 
          <button onClick={()=> {handleBookingConfirm(_id)}} className="btn btn-ghost btn-xs">Confirm</button>
        }
      </th>
    </tr>
  );
};

export default Booking;