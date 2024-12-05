
import { Tires } from "../../Data/data";
function Heroservice() {
  return (
    <div className="hidden w-full h-[200px] bg-zinc-200 md:mt-10 md:flex justify-center items-center">
      <div className="grid md:grid-cols-7  gap-10 p-5">
        {Tires.map((data, index) => (
          <div className="md:w-[150px] md:h-[150px] size-20 bg-white col-span-1 shadow-xl" key={index}>
            <img src={data.image} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heroservice;
