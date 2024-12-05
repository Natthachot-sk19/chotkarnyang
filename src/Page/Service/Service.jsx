
import { ServiceData } from "../../Data/data";
import Payment from "../../Components/Hero/Payment";

function Service() {
  return (
    <div className="w-full md:h-[1200px] flex flex-col justify-center items-center">
      <h1  className="font-bold text-[28px] mt-10">การบริการของเรา</h1>
      <div className="grid sm:grid-cols-6 gap-5 p-5">
        {ServiceData.map((data, index) => (
          <div className="md:w-[350px] md:h-[350px]  bg-white col-span-2 shadow-xl flex flex-col justify-center items-center" key={index}>
            <div className="md:w-[250px] md:h-[250px] size-[200px]">
              <img src={data.image} alt="" className="md:w-full md:h-full"/>
            </div>
              <p className="font-semibold md:text-[24px] text-red-600 flex justify-center items-center mt-5">{data.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Payment />
      </div>
    </div>
  );
}

export default Service;
