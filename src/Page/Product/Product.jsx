
import { TireData } from "../../Data/data";
import { MaxData } from "../../Data/data";
function Product() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mb-20">
      <div className="w-full h-[68px] bg-emerald-400 flex justify-center items-center">
        <h1 className="font-bold text-[28px]">ยางรถยนต์</h1>
      </div>

      <div className="grid md:grid-cols-4 justify-center md:justify-center items-center gap-5 p-5 px-20">
        {TireData.map((data, index) => (
          <div className="w-[350px] h-[450px] bg-white  shadow-xl col-span-1 flex flex-col justify-center items-center" key={index}>
            <div className="w-auto h-[250px]" >
              <img src={data.image} alt="" className="w-full h-full" />
            </div>
            <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
              {data.name}
            </p>
            <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
              {data.brand}
            </p>
            <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
              {data.price}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col justify-center items-center w-full">
        <div className="w-full h-[68px] bg-emerald-400 flex justify-center items-center">
          <h1 className="font-bold text-[28px]">แม็กรถยนต์</h1>
        </div>
        <div className="grid md:grid-cols-4 justify-center sm:justify-normal items-center gap-5 p-5">
          {MaxData.map((data, index) => (
            <div className="w-[350px] h-[450px] bg-white  shadow-xl col-span-1 flex flex-col justify-center items-center" key={index}>
              <div className="w-auto h-[250px]">
                <img src={data.image} alt="" className="w-full h-full" />
              </div>
              <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
                {data.name}
              </p>
              <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
                {data.brand}
              </p>
              <p className="font-semibold text-[24px] text-red-600 flex justify-center items-center mt-5">
                {data.price} บาท
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
