
import Map from "../Map/Map";
import Contactform from "./Contactform";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="w-full h-auto  flex flex-col justify-center items-center">
      <div className="mt-5 mb-5">
        <h1 className="font-bold text-[32px] underline">ข้อมูลของเรา</h1>
      </div>
      <div className="w-[80%] h-[550px] mb-20 grid md:grid-cols-2 ">
        <div className="col-span-1 flex justify-center items-center mt-10">
          <div className="grid md:grid-cols-2  gap-5">
            <div className="col-span-1 md:size-[250px] bg-blue-100 flex flex-col justify-center items-center gap-5 ">
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-blue-600 text-[32px]"
                />
              </div>
              <div className="font-bold">
                <h1>089-905-6482</h1>
                <h1>097-095-2690</h1>
              </div>
            </div>
            <div className="col-span-1 md:size-[250px] bg-blue-100 flex flex-col justify-center items-center gap-5 ">
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-blue-600 text-[32px]"
                />
              </div>
              <div>
                <h1 className="text-center font-bold">
                  355 หมู่1 ต.ท่าวุ้ง อ.ท่าวุ้ง จ.ลพบุรี 15150 ก่อนถึงปั้มบางจาก
                </h1>
              </div>
            </div>
            <div className="col-span-1 md:size-[250px] bg-blue-100 flex flex-col justify-center items-center gap-5">
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-blue-600 text-[32px]"
                />
              </div>
              <div>
                <h1 className="font-bold">
                  <a href="">chotkarnyang.com</a>
                </h1>
              </div>
            </div>
            <div className="col-span-1 md:size-[250px] bg-blue-100 flex flex-col justify-center items-center gap-5">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-600 text-[32px]"
                />
              </div>
              <div className="font-bold">
                <h1>chotkarnyang.cky@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Map />
        </div>
      </div>

      <Contactform />
    </div>
  );
}

export default Contact;
