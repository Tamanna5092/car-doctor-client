import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TeamCard = () => {
  const [teams, setTeams] = useState([])

  useEffect(()=> {
    fetch('team.json')
    .then(res => res.json())
    .then(data => setTeams(data))
  },[])

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {
        teams.map((team => <SwiperSlide>
          <div className="card w-96 border-2 cursor-grab">
            <figure className="p-6">
              <img src={team.profile_picture} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-[#444444] text-2xl font-bold">
                {team.title}
              </h2>
              <p className="text-[#737373] font-semibold">{team.name}</p>
              <div className="flex gap-4 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="19.834" cy="19.834" r="19.834" fill="#395185" />
                  <path
                    d="M20.9365 28.988V20.6503H23.8736L24.3102 17.3858H20.9365V15.3065C20.9365 14.3645 21.2106 13.7195 22.6223 13.7195H24.4111V10.8091C23.5407 10.7197 22.6659 10.6766 21.7906 10.6799C19.1945 10.6799 17.412 12.1977 17.412 14.984V17.3797H14.4941V20.6442H17.4184V28.988H20.9365Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="19.9447" cy="19.834" r="19.834" fill="#55ACEE" />
                  <path
                    d="M15.5797 28.9885C24.083 28.9885 28.7346 21.9428 28.7346 15.8435C28.7346 15.6463 28.7346 15.4463 28.7262 15.2492C29.6318 14.5936 30.4134 13.7819 31.0344 12.8523C30.1884 13.2252 29.292 13.4711 28.3741 13.5818C29.3409 13.0038 30.0651 12.0945 30.4119 11.0229C29.5035 11.561 28.5093 11.9388 27.4728 12.1397C26.7759 11.3975 25.8538 10.9059 24.8492 10.7409C23.8447 10.5759 22.8137 10.7467 21.9161 11.227C21.0185 11.7072 20.3043 12.4701 19.8841 13.3974C19.4639 14.3246 19.3612 15.3646 19.592 16.3561C17.7538 16.2639 15.9555 15.7864 14.3137 14.9545C12.672 14.1226 11.2234 12.9548 10.062 11.527C9.47241 12.5454 9.29248 13.7499 9.55875 14.8961C9.82502 16.0422 10.5175 17.0441 11.4957 17.6982C10.7627 17.6733 10.0458 17.4765 9.40293 17.1236V17.187C9.40419 18.2538 9.77374 19.2874 10.4491 20.1131C11.1245 20.9388 12.0643 21.5061 13.1096 21.7189C12.7128 21.8282 12.3029 21.8827 11.8914 21.8808C11.6013 21.8817 11.3117 21.8548 11.0267 21.8006C11.3221 22.7189 11.8974 23.5217 12.6719 24.0968C13.4465 24.6718 14.3814 24.9902 15.3459 25.0073C13.7075 26.2942 11.6835 26.9921 9.60009 26.9887C9.23297 26.9903 8.86612 26.9691 8.50162 26.9254C10.6162 28.2735 13.072 28.9893 15.5797 28.9885Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20.0553" cy="19.834" r="19.834" fill="#0A66C2" />
                  <path
                    d="M13.1676 15.088C14.3849 15.088 15.3717 14.1012 15.3717 12.8839C15.3717 11.6665 14.3849 10.6797 13.1676 10.6797C11.9502 10.6797 10.9634 11.6665 10.9634 12.8839C10.9634 14.1012 11.9502 15.088 13.1676 15.088Z"
                    fill="white"
                  />
                  <path
                    d="M17.4531 16.7588V28.9875H21.2499V22.9401C21.2499 21.3444 21.5501 19.7991 23.5286 19.7991C25.48 19.7991 25.5041 21.6234 25.5041 23.0408V28.9885H29.303V22.2823C29.303 18.9881 28.5938 16.4565 24.7436 16.4565C22.895 16.4565 21.6559 17.471 21.1492 18.431H21.0978V16.7588H17.4531ZM11.2657 16.7588H15.0686V28.9875H11.2657V16.7588Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </SwiperSlide>))
      }
    </Swiper>
  );
};

export default TeamCard;
