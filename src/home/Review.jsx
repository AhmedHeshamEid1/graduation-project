import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/banner-books/profile.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
function Review() {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customars
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div  className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, alias illo natus numquam vel laudantium explicabo hic
                  atque est repellendus, doloremque cupiditate dolores cum porro
                  eaque qui temporibus culpa sit!
                </p>
                    <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Mark Ping</h5>
                    <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
