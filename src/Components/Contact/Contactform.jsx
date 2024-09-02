import React from "react";

function Contactform() {
  return (
    <div className="w-full md:h-[450px] flex justify-center items-center mt-20 md:mt-0">
      <div className="md:w-[1200px] md:h-[450px] h-[350px] bg-[#2e2d2d] rounded-sm flex justify-center item">
        <div className="md:w-[650px] w-[350px] px-5 ">
          <div className="flex justify-center items-center mt-5">
            <h1 className="text-white font-bold text-[24px]">Contact Us</h1>
          </div>
          <form action="">
            <div className="md:flex gap-10 ">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Email
                </label>
                <input type="text" className="rounded-md px-5 py-1" />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Name
                </label>
                <input type="text" className="rounded-md px-5 py-1" />
              </div>
            </div>

            <div className="flex flex-col w-full mt-3">
              <label htmlFor="" className="text-white">
                Message
              </label>
              <textarea className="md:min-h-[100px] min-h-[50px] md:h-[150px] h-[50px] max-h-[80px] md:max-h-[200px] rounded-md px-5 py-1"></textarea>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button type="submit" className="w-full px-5 py-2 bg-amber-600 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
