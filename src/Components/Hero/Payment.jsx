;
import { PaymentData } from "../../Data/data";
function Payment() {
  return (
    <div className="w-full md:h-[200px] h-auto bg-zinc-200 mt-10 md:flex justify-center items-center ">
      <div className="flex flex-wrap justify-center  gap-10 p-5">
        {PaymentData.map((data, index) => (
          <div className="md:w-[100px] md:h-[100px] size-10 bg-white col-span-1 shadow-xl" key={index}>
            <img src={data.image} alt="" className="md:w-full md:h-full " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
