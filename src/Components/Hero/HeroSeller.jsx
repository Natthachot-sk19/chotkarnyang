
import { SellerData } from "../../Data/data";
function HeroSeller() {
  return (
    <div className="w-full h-auto  md:mt-10 flex justify-center items-center mt-[120px]">
      <div className="grid sm:grid-cols-4    gap-10 p-5">
        {SellerData.map((data, index) => (
          <div className="md:w-[330px] md:h-[250px] size-[250px] bg-white col-span-1 shadow-xl" key={index}>
            <img src={data.image} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSeller;
