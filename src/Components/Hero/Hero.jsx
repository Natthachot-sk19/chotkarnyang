import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="w-full md:h-[850px] h-auto  flex justify-center items-center md:mb-0">
      <div className="md:w-[1400px] md:h-[500px] grid md:grid-cols-2 ">
        <div className="col-span-1 ">
          <div className="flex md:justify-normal justify-center">
            <h1 className="md:text-[68px] text-[42px] font-bold">
              โชติการยาง{" "}
            </h1>
            <div className=" md:text-[68px] text-[42px] font-bold ">
              ท่าวุ้ง
            </div>
          </div>

          <h1 className="font-bold text-center md:text-start md:text-[32px] text-[24px] text-red-500 underline">
            จำหน่าย
          </h1>
          <h1 className="font-bold text-center md:text-start md:text-[32px] text-[20px] text-amber-500 mt-3">
            <Typewriter
              options={{
                strings: [
                  "ยางรถยนต์",
                  "ล้อแม็ก",
                  "ปะยาง",
                  "เปลี่ยนยาง",
                  "เปลี่ยนแม็ก",
                  "ถ่วงล้อ",
                  "เติมลมไนโตรเจน",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            porro tempora repellendus nesciunt. Similique aliquam assumenda
            adipisci? Vitae, tempora similique!
          </p>
          <div>
            <ul>
              <li>ประสบการณ์ทำงานมากกว่า 10 ปี</li>
            </ul>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="font-bold md:text-[24px]">
              เวลาทำการ 08:30 - 18:00
            </h1>
            <h1 className="font-bold md:text-[24px]">เปิดบริการทุกวัน</h1>
          </div>
          <div className="flex justify-center sm:mt-20">
            <Link to={"/service"}>
              <button className="bg-blue-500 py-2 px-5 rounded-lg font-bold md:text-[20px] text-white">
                บริการของเรา
              </button>
            </Link>

            <Link to={"/contact"}>
              <button className="bg-green-600 py-2 px-5 rounded-lg font-bold md:text-[20px] text-white ml-5">
                ค้นหาสถานที่
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="md:w-[450px] md:h-[450px] size-[350px] md:mt-0 mt-5 bg-[#1e1f25] mx-auto relative ">
            <img
              src="./img/home.jpg"
              alt=""
              className="md:absolute -left-5 top-5 shadow-xl"
            />
          </div>
          <div className="flex justify-center items-center mt-10 bg relative">
            <h1 className="bg-yellow-200 font-bold md:text-[24px] px-10 py-4 absolute -top-20 md:-top-16 border-2 shadow-md">
              Chotkarnyang
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
