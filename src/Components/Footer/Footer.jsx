import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full md:h-[350px] bg-[#1e1f25] flex justify-center">
      <div className="sm:w-[1400px]  grid sm:grid-cols-4 mt-10">
        <div className="col-span-1 mt-10">
          <ul className="flex flex-col items-center md:items-start gap-5">
            <li>
              <Link to={"/"} className="text-white hover:text-amber-300" onClick={scrollToTop}>
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link to={"/product"} className="text-white hover:text-amber-300" onClick={scrollToTop}>
                สินค้า
              </Link>
            </li>
            <li>
              <Link to={"/service"} className="text-white hover:text-amber-300" onClick={scrollToTop}>
                บริการ
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-white hover:text-amber-300" onClick={scrollToTop}>
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center col-span-1">
          <a href="/">
            <img src="./img/logo.png" alt="" className="size-[150px]" />
          </a>

          <p className="text-white">
            สินค้าหลากหลายยี่ห้อให้เลือก ครอบคลุมทุกการใช้งาน ราคาถูก บริการดี
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 col-span-1">
          <h1 className="bg-white w-[120px] py-2 flex justify-center font-bold">
            ติดต่อเรา
          </h1>
          <p className="text-white mt-5">
            355 หมู่ 1 ต.ท่าวุ้ง อ.ท่าวุ้ง จ.ลพบุรี 15150
          </p>

          <p className="text-white">ก่อนถึงปั้มบางจาก</p>
          <div className="flex flex-col mt-3">
            <h1 className="text-red-500 text-[18px]">089-905-6482</h1>
            <h1 className="text-red-500 text-[18px]">097-095-2690</h1>
          </div>
          <h1 className=" text-white text-[20px] mt-2">
            เปิดบริการทุกวัน 08:30 - 18:00
          </h1>
        </div>

        <div className="col-span-1 flex flex-col justify-center py-10">
          
          <img src="./img/qrcode.jpg" alt="" className="md:size-[200px] size-40"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
